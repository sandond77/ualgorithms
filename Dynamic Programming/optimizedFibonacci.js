//GIven solution using an array
function fib1(n, memo=[]){
	if(memo[n] !== undefined) return memo[n];

	if(n <= 2) {
		console.log(1);
		return 1
	}

	let res = fib1(n-1, memo) + fib1(n-2, memo);
	memo[n] = res;
	// console.log(res);
	return res
}


//My solution using an object
function fib2(n, storage={}){
	if(n <= 2) {
		console.log(1)
		return 1;
	}

	if(!storage[n]) {
		storage[n] = fib2(n-1,storage) + fib2(n-2, storage);;
	}
	// console.log(storage[n])
	return storage[n]
}

//Benchmark code separately
const { PerformanceObserver, performance } = require('perf_hooks');




var t0 = performance.now();
fib1(1000);   // <---- The function you're measuring time for 
var t1 = performance.now();
console.log("Call to fib1 took " + (t1 - t0) + " milliseconds.");

// var t2 = performance.now();
// fib2(1000);   // <---- The function you're measuring time for 
// var t3 = performance.now();
// console.log("Call to fib2 took " + (t3 - t2) + " milliseconds.");
function fib(n){
	if(n<=2) return 1;
	let fibNums = [0,1,1];

	for(let i=3; i <= n; i++){
		fibNums[i] = fibNums[i-1] + fibNums[i-2];
	}

	console.log(fibNums);
	return fibNums[n]
}

const { PerformanceObserver, performance } = require('perf_hooks');

var t0 = performance.now();
fib(10000);   // <---- The function you're measuring time for 
var t1 = performance.now();
console.log("Call to fib took " + (t1 - t0) + " milliseconds.");
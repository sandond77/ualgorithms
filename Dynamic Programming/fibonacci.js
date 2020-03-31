// fib(n) = fib(n-1) + fib(n-2);
// fib(2) = 1;
// fib(1) = 1;

function fib(n){
	if(n === 1 || n === 2){
		return 1
	}
	console.log(fib(n-1) + fib(n-2))
	return fib(n-1) + fib(n-2)
}

fib(3)
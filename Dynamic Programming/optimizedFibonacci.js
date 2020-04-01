function fib(n, memo=[]){
	if(memo[n] !== undefined) return memo[n];

	if(n <= 2) return 1

	let res = fib(n-1, memo) + fib(n-2, memo);
	meno[n] = res;
	console.log(res);
	return res
}

fib(10)
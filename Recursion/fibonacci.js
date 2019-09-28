// Write a recursive function called fib which acceps a number and retursn the nth number in the fibonacci sequence. Recall the that the fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 which starts with 1 and 1 and where every number therafter is equal to the sum of the previous two numbers. 

// fib(4) // 3
// fib(10) //55
// fib(28) // 317881
// fib(35) //9227465

function fib(num){
	if(num <= 2) {
		return 1
	}
	return fib(num-2)+fib(num-1)
}


fib(3) // 3

Given Solution
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
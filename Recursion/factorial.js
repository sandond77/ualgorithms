Write a function factorial which accepts a number and returns the fatorial of that number. A factorial is the product of an integer and all the integers below it. 

// 4! = 24
// 0! = 1
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
	if(num === 0) return 1;
	return num*(factorial(num-1));
}

Given Solution
function factorial(x){
	if (x < 0 ) return 0;
	if (x <= 1 ) return 1;
	return x * factorial(x-1);
 }
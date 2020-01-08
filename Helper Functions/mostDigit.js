function mostDigit(arr){
	let maxDigit = 0;
	for(let i=0; i < arr.length; i++){
		maxDigit = Math.max(maxDigit, digitCount(arr[i]))
	}
	console.log(maxDigit);
	return maxDigit
}

function digitCount(num){
	if(num===0) return 1;
	return Math.floor(Math.log10(Math.abs(num)))+1;
}

mostDigit([1234, 56, 7])// returns 4
mostDigit([1, 1, 11111, 1])// returns 5
mostDigit([12,34,56,78])// returns 2
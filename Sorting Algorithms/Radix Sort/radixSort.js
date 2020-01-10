function mostDigit(arr){
	let maxDigit = 0;
	for(let i=0; i < arr.length; i++){
		maxDigit = Math.max(maxDigit, digitCount(arr[i]))
	}
	return maxDigit
}

function digitCount(num){
	if(num===0) return 1;
	return Math.floor(Math.log10(Math.abs(num)))+1;
}

function getDigit(num, index){
	return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

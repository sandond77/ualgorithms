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

function radixSort(arr){
	let maxDigitCount = mostDigit(arr);
	for(let i=0; i < maxDigitCount; i++){
		let digitBuckets = Array.from({length: 10}, () => [])
		for(let j=0; j< arr.length; j++){
			let digit = getDigit(arr[j],i);
			digitBuckets[digit].push(arr[j]) //using the current value of comparison digit, we will push the entire number to their respective bucket
		}
		arr = [].concat(...digitBuckets) //spread operator allows to to concat all the arrays perfectly without nested arrays happening or creating another loop
	}
	return arr
}

radixSort([125, 12, 12345, 4235, 1346,7])
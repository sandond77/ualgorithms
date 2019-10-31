// Pseudocode
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element and if iti is in the incorrect order, iterate through the sorted portion (i.e the left side) to place the element in the correct place
// Repeat until the array i sorted


function insertionSort(arr){
	function swap(arr, index1, index2){
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	// let swapped = false;
	for(let i=1; i<arr.length; i++){
		// let currentVal = arr[i];
		for (let j=i-1; j >= 0 && arr[j] > arr[i]; j--){  //need second conditional on the j to stop the continuous looping once sorting as finished
			// console.log('-------')
			// console.log('comparing '+ arr[i] +' vs '+ arr[j])
			// console.log('current i is:' + i + ' and current j is:' +j)
			if(arr[j]>arr[i]){
				swap(arr, i, j)
				i--
				// console.log('SWAPPING')
			} 
			console.log(arr)
		}
		
	}
	return arr
}

insertionSort([5,3,4,1,2])
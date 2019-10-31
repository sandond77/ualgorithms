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

	for(let i=1; i<arr.length; i++){
		for (let j=i-1; j >= 0 && arr[j] > arr[i]; j--){  //need second conditional on the j to stop the continuous looping once sorting as finished
			if(arr[j]>arr[i]){
				swap(arr, i, j)
				i-- //need to go back down i as the elements are being swapped around the array as the position of our comparison has changed, this will allow j to loop properly
				// console.log('SWAPPING')
			} 
			console.log(arr)
		}
		
	}
	return arr
}

// insertionSort([5,3,4,1,2])
// insertionSort([2,1,9,76,4])

// Given Solution
// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
// 		arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])
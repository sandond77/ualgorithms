// Pseudocode
// Function accepts an array, start index, and end index 
// These can default to 0 and the array length minus 1, respectively
// Grab the pivot from the start of the array
// Store the current pivot index in a variable
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element with the pivot index
// Return the pivot index

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function pivot (arr, start=0, end=arr.length-1){
	let pivotIndex = start;
	const pivot = arr[start];
	for (let i=start; i <= end; i++){
		if (pivot > arr[i]){	
			console.log(i, arr[i], pivotIndex, arr[pivotIndex])
			swap(arr, i, pivotIndex)
			pivotIndex++;
		}
		console.log(arr, pivot, pivotIndex)
	}
	return pivotIndex
}

pivot([28,41,4,11,16,1,40,14,36,37,42,18])
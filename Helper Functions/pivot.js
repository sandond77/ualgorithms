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
	let pivotIndex = 0; 
	let pivot = arr[start];
	for (let i=1; i <= end; i++){
		console.log(arr);
		if (pivot > arr[i]){	//comparison is always being made with the pivot number but it does not move til the end
			pivotIndex++; //this pivot index increment will tell us where to switch the pivot number at the end
			swap(arr, i, pivotIndex); //as we compare values, we want to continue to move the smaller values to the start of the array/ left of the pivt
		}
	}	
	console.log(pivotIndex)
	swap(arr, start, pivotIndex); //moves out pivot number to the correct place based on the pivot index counter
	console.log(arr)

	return pivotIndex
}

pivot([28,41,4,11,16,1,40,14,36,37,42,18]) //should return 6
pivot([4,8,2,1,5,7,6,3]) //should return 3


// GIVEN SOLUTION
function pivot(arr, start=0, end=arr.length+1){
	let pivot = arr[start];
	let swapIdx = start;
	
	for(let i = start+1; i<arr.length; i++){
		if(pivot > arr[i]){
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx
}


pivot([28,41,4,11,16,1,40,14,36,37,42,18]) //should return 6
pivot([4,8,2,1,5,7,6,3]) //should return 3
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
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


function quickSort(arr, left = 0, right = arr.length -1){
	if(left < right){
	let pivotIndex = pivot(arr, left, right)
	quickSort(arr, left, pivotIndex-1);
	quickSort(arr, pivotIndex+1, right);
	}
	return arr;
}



quickSort([4,6,9,1,2,5,3])
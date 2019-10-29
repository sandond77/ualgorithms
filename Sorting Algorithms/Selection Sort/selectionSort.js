// Pseudocode
// Store the first element as the smallest value you’ve seen so far
// Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, set that smaller number to be the new minimum and store the index value, then continue until the end
// If the minimum is not the value(index) you initial began with, swap the values.
// Repeat with the next element under the array is sorted


function selectionSort(arr){
	function swap(arr, index1, index2){
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}
	
	for(let i=0; i < arr.length-1; i++){ //first loop will go through our numbers and prevent us from searching through the sorted portion of the array
		let lowest = arr[i]  //setting the initial number as the smallest value
		let index;
		for(let j=i; j < arr.length -1 ; j++){ //second loop will allow us to compare the two values to see which one is smallest
			index = j; //setting the initial index to j incase the starting value is the smallest
			console.log(j,j+1, arr[j], arr[j+1])
			if(arr[j] > arr[j+1]){ //if the current value is larger than the next value, we will set lowest as the new smaller value and change our saved index position as well
				lowest = arr[j+1];
				index = j+1
			}
			
		}
		swap(arr, i, index); //swapping the start of the sort with the smallest value we found
		console.log(arr);
	}
}
 
selectionSort([5,3,4,1,2])
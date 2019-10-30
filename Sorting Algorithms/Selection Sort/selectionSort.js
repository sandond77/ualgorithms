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
		let index;
		let flag = false;
		for(let j=i; j < arr.length -1 ; j++){ //second loop will allow us to compare the two values to see which one is smallest
			let lowest = arr[j] //setting the initial number as the smallest value
			index = j; //setting the initial index to j incase the starting value is the smallest
			console.log(j,j+1, arr[j], arr[j+1])
			if(arr[j] > arr[j+1]){ //if the current value is larger than the next value, we will set lowest as the new smaller value and change our saved index position as well
				lowest = arr[j+1];
				index = j+1;
				flag = true;
			}
			
		}
		if(flag){
			swap(arr, i, index); //swapping the start of the sort with the smallest value we found
		}

		console.log(arr);
	}
}
 
selectionSort([5,3,4,1,2])


// Given Solution using ES5
function selectionSort(arr){
	for(let i=0; i<arr.length; i++){
		let lowest = i;
		for(let j=i+1; j<arr.length; j++){
			if(arr[j] < arr[lowest]){
				lowest = j;
			}
		}

		if( i!== lowest){
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr
}
 
selectionSort([5,3,4,1,2])

//Given Solution using es6/es2015
function selectionSort(arr){
	const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]]);
	
	for(let i=0; i<arr.length; i++){
		let lowest = i;
		for(let j=i+1; j<arr.length; j++){
			if(arr[j] < arr[lowest]){
				lowest = j;
			}
		}
		if(i!==lowest) swap(arr, i, lowest)
	}
	return arr
}
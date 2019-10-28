// Pseudocode
// Start looping from a variable called i from the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap the two values
// return the sorted array

function bubbleSort(arr){
	for(let i=arr.length-1; i > 0; i--){ //this loop counts from end to beginning and lets us know to stop sorting the largest value once it reaches the end
		for(let j=0; j<= i-1; j++){ //this loop moves forward in the array and will stop until it reaches i, which should be at the start of the sorted/largest values 
			if(arr[j] > arr[j+1]){ //comparing the current index to the next index to see which one is larger; swap if larger value is first
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp
				console.log(arr)
			}
		}
	}
	console.log(arr)
}

// bubbleSort([3,4,1,2]) // [1,2,3,4]
// bubbleSort([1,10,2,15,30,5,33]) //[1,2,5,10,15,30,33]
// bubbleSort([5,1,4,2,8]) //[1,2,4,5,8]
bubbleSort([37,45,29,8])

// Given Solution using ES5
function bubbleSort(arr){
	let noSwaps;
	for(let i=arr.length; i > 0; i--){
		noSwaps = true;
		for(let j=0; j<i-1; j++){
			console.log(arr, arr[j], arr[j+1])
			if(arr[j] > arr[j+1]){
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				noSwaps = false;
			}
		}

		if (noSwaps) break;
	}
	return arr
}

bubbleSort([1,2,8,3,4,5])
// Given Solution Using ES6/ES2015

// Given Solution using ES5
// function bubbleSort(arr){
// 	const swap = (arr,index1, index2) => {
// 		[arr[index1], arr[index2]] = [arr[index2],arr[index1]];
// 	}
// 	for(let i=arr.length; i > 0; i--){
// 		for(let j=0; j<i-1; j++){
// 			console.log(arr, arr[j], arr[j+1])
// 			if(arr[j] > arr[j+1]){
// 				swap(arr,j, j+1)
// 			}
// 		}
// 	}
// 	return arr
// }
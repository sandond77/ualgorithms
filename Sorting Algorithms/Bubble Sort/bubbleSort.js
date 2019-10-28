// Pseudocode
// Start looping from a variable called i from the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap the two values
// return the sorted array

function bubbleSort(arr){
	for(let i=arr.length-1; i > 0; i--){ //this loop counts from end to beginning and lets us know to stop sorting the largest value once it reaches the end
		for(let j=0; j<= i-1; j++){ //this loop moves forward in the array and will stop until it reaches i, which should be at the start of the sorted values 
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
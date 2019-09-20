
// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted.


// Given Examples
// countUniqueValues([1,1,1,1,1,2]) returns 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) returns 7
// countUniqueValues([]) returns 0
// countUniqueValues([-2,-1,-1,0,1]) returns 4


// 1. Iterate through the array
// 2. Add conditional logic that compares the previous value to the current value:
	// If greater than the previous value, add to the unique value counter. otherwise move on to next value

function countUniqueValues(values){
	let unique = 0;
	let current = values[0]-1;
	for(let i=0; i < values.length; i++){
		// console.log('current: '+ current, 'value: '+ values[i], unique)
		if (current < values[i]){
			current = values[i];
			unique++
		}
	}
	console.log(unique)
	return unique
}

countUniqueValues([1,1,1,1,1,2]) 
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) 
countUniqueValues([]) 
countUniqueValues([-2,-1,-1,0,1]) 



// // Given Solution
// function countUniqueValues(arr){
// 	if(arr.length == 0 ){
// 		console.log(0)
// 		return 0
// 	}
// 	let i = 0;
// 	for (let j=1; j < arr.length; j++){
// 		if( arr[i] !== arr[j]){
// 			i++; //moves pointer 1 u
// 			arr[i] = arr[j];
// 		}
// 	}
// 	console.log(i+1); //since the indice of the array starts at 0, need to add 1 to compensate
// 	return i+1
// }
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) 
// countUniqueValues([])
// Pseudocode
// Create an array
// Take a look at the smallest values in each input array
// While there are still values unsorted:
// If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array. 
// Once the end of an array is reach, push the remaining array’s values into the results

function merge(arr1,arr2){
	let results = [];
	let length = (arr1.length < arr2.length) ?  arr1.length : arr2.length;
	let remainder = (arr1.length > arr2.length) ?  arr1.length - length : arr2.length - length;
	console.log(length, remainder)
	for(let i=0; i < length; i++){
		console.log(arr1[i], arr2[i])
		
		if(arr1[i] < arr2[i]){
			results.push(arr1[i])
			results.push(arr2[i])
		} else {
			results.push(arr2[i])
			results.push(arr1[i])
		}
		console.log(results)
	}

	for(let j = length; j < length + remainder; j++){
		if(arr1[j]){
			results.push(arr1[j])
		} else {
			results.push(arr2[j])
		}
		console.log(results)
	}
}


merge([1,3,9,50,80], [2,6,11])
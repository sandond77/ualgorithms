
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise return -1.

// Test Cases
// binarySearch([1,2,3,4,5], 2) //1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],10) // 2
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],95) // 16
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],100) // -1

function binarySearch(arr, value){
	let start = 0;
	let end = arr.length - 1;
	let mid =  Math.ceil((arr.length -1)/2);

	// console.log(start, mid, end)
	while (end > start){
		// console.log(start, mid, end)
		// console.log(arr)
		if(arr[mid] > value){
			end = mid;
			let temp = arr.slice(start,end+1); //creating a temporary array from the new range which we can use to calculate a new mid point
			let add =  Math.ceil((temp.length -1)/2); //finding the value of the length between start and the new mid point of the new array 
			mid = start + add; //adding the mid length to the start to find the new mid point
		}

		if(arr[mid] < value){
			start = mid;
			end = arr.length -1;
			let temp = arr.slice(start,end+1);
			let add =  Math.ceil((temp.length -1)/2);
			mid = start + add
		}

		if(arr[mid] === value){
			// console.log(arr[mid])
			console.log(mid)
			return mid
		}
	} 

	console.log(false + " -1")
	return -1
}

// Pseudocode
// 1. Left starts at first element. Right starts at last element. Mid point is array.length/2. 
// 2. Compare midpoint value to desired value.
// 	a. If Midpoint > value, set old midpoint as right. New mid point will be new array length/2. 
// 	b. If Midpoint < value, set old midpoint as left. New midpoint will be new array length/2.
// 3. Repeat until value is found and return the index. 
// 	a. Return -1 if value is not found.

binarySearch([1,2,3,4,5], 2) //1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],10) // 2
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],95) // 16
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],100) // -1

// Given Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}
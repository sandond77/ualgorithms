// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100,200,300] is a subarray of the original array, but [100,300] is not. 

// Time Complexity - O(N)
// Space Complexity - O(1)

// Test Cases 
// maxSubarraySum([100,200,300,400],2) //700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1],2) //5
// maxSubarraySum([3,-2,7,-4,1,-1,-4,-2,1],2) //5
// maxSubarraySum([2,3],3)//null

// 1. Sum the terms up the the nth number given. Save this sum to a variable
// 2. Move the window by subtracting the first term and adding the new term in the array. Save this sum as a temporary variable and compare this one and the previous.
// 3. Continue to move window until we reach the end of the array.
// 4. Edge Cases: Check to see if the given number is larger than length of the array.

function maxSubarraySum(){
	let maxSum = 0;
	let tempSum = 0;
	let arr = arguments[0];
	let terms = arguments[1]

	if(terms > arr.length){
		console.log(null)
		return null
	}

	for(let i=0; i < terms; i++){
		maxSum += arr[i];
	}

	tempSum = maxSum;
	// console.log(maxSum)

	for(let i=terms; i < arr.length; i++){
		tempSum = tempSum - arr[i-terms] + arr[i];
		// console.log(tempSum, maxSum, arr[i-terms], arr[i])
		if(tempSum > maxSum){
			maxSum = tempSum;
		}
	}

	console.log(maxSum)
	return maxSum
}
// 
maxSubarraySum([100,200,300,400],2) //700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-1],2) //5
maxSubarraySum([3,-2,7,-4,1,-1,-4,-2,1],2) //5
maxSubarraySum([2,3],3)//null
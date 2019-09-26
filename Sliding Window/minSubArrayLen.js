// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

// minSubArrayLen([2,1,3,2,4,3],7) // 2, [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4],9) // 2, [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52) // 1 because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4,3,3,8,1,2,3],11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

// 1. Check array to see if there is a value greater than or equal to the target. 
// 2. Setup sliding window to check subarrays for value. Start with two indices. Increase window size until target value is met. 
// 3. If target value is met, check to see if shrinking the window will result in a shorter subarray length. Otherwise, return 0. 

function minSubArrayLen(){
	let start = 0;
	let end = 0;
	let total = 0;
	let arr = arguments[0];
	let target = arguments[1];
	let length = arr.length+1; //setting this larger than the array length for conveniene

	while (start < arr.length){
		if(total < target && end < arr.length){  //starts the window small at 0,0. Window will gradually widen until window hits the end of the array or target is met
			total += arr[end];
			end++;
		} else if (total >= target){ //shrinks the window by moving up the left indices.
				total -= arr[start] 
				start++
				length = Math.min(length, end-start+1) //checks to see if the window is smaller
		} else {
			break;
		}
	}
	
	if(length === arr.length+1){ //allows us to return 0 if the target value was not hit
		console.log(0)
		return 0
	} else {
		console.log(length)
		return length
	}
}

minSubArrayLen([2,1,3,2,4,3],7) // 2, [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4],9) // 2, [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52) // 1 because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4,3,3,8,1,2,3],11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
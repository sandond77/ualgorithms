
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same sameFrequency of digits.

// Your solution MUST have the following complexitiy: O(N).

// Sample Outputs
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578,5879385) //true
// sameFrequency(22,222) // false


// 1. Loop through each number and count the occurrences of each digit into objects
// 2. Compare the the two objects
// 3. Edge Cases: Compare the length of the number


function sameFrequency(num1,num2){
	num1 = num1.toString();
	num2 = num2.toString();

	if(num1.length !== num2.length){
		console.log(false)
		return false;
	}

	let count1 = {};
	for(let i=0; i < num1.length; i++){
		if (!count1[num1[i]]){
			count1[num1[i]] = 1
		} else {
			count1[num1[i]]++
		}
	}

	for(let i=0; i < num2.length; i++){
		if (count1[num2[i]]){
			count1[num2[i]] -= 1
		} else {
			console.log(false)
			return false
		}
	}

	console.log(true)
	return true
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578,5879385) //true
sameFrequency(22,222) // false
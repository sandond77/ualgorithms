// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Time - O(N) and Space O(1)

// Test Cases
// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) //fale
// averagePair([],4) //false


function averagePair(){
	let arr = arguments[0];
	let target = arguments[1];

	if(arr.length === 0){
		console.log(false)
		return false
	}

	let left = 0; 
	let right = arr.length-1;

	while (left < right){
		let avg = (arr[left]+arr[right])/2;
		if(avg === target){
			console.log(true)
			return true
		} else if (avg > target){
			right--
		} else {
			left ++
		}
	}

	console.log(false)
	return false
}

averagePair([1,2,3], 2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) //fale
averagePair([],4) //false 


// Given Solution
// function averagePair(arr, num){
//   let start = 0
//   let end = arr.length-1;
//   while(start < end){
//     let avg = (arr[start]+arr[end]) / 2 
//     if(avg === num) return true;
//     else if(avg < num) start++
//     else end--
//   }
//   return false;
// }
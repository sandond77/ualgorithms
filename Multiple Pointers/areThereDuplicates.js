// Implement a function called, areThereDuplicates, which accepts a variable number of arguements, and checks whether thare are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern or multiple points pattern.

// Restrictions - O(N) for space and time; Bonus - O(n log n) for time and O(1) for space

// Given Examples
// areThereDuplicates(1, 2, 3) // false;
// areThereDuplicates(1, 2, 2) // true;
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(){
	let left=0;
	let right = arguments.length - 1;
	while(left < right){
		if(arguments[left] === arguments[right]){
			console.log(true)
			return true
		} else {
			left++;
		}
	}

	console.log(false)
	return false
}

areThereDuplicates(1, 2, 3) // false;
areThereDuplicates(1, 2, 2) // true;
areThereDuplicates('a', 'b', 'c', 'a') // true
// Implement a function called, areThereDuplicates, which accepts a variable number of arguements, and checks whether thare are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern or multiple points pattern.

// Restrictions - O(N) for space and time; Bonus - O(n log n) for time and O(1) for space

// Given Examples
// areThereDuplicates(1, 2, 3) // false;
// areThereDuplicates(1, 2, 2) // true;
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(){
	let count={};
	for(let i=0; i < arguments.length; i++){
		// console.log(arguments[i])
		if(!count[arguments[i]]){
			count[arguments[i]] = 1
		} else {
			console.log(true)
			return true
		}
	}
	console.log(false)
	return false
}

areThereDuplicates(1, 2, 3) // false;
areThereDuplicates(1, 2, 2) // true;
areThereDuplicates('a', 'b', 'c', 'a') // true
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

// Given Solutions
// function areThereDuplicates() {
// 	let collection = {}
// 	for(let val in arguments){
// 	  collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
// 	}
// 	for(let key in collection){
// 	  if(collection[key] > 1) return true
// 	}
// 	return false;
//   }

//   function areThereDuplicates() {
// 	return new Set(arguments).size !== arguments.length;
//   }
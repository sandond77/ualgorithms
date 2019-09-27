// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters. 

// Time Complexity - O(n)

// findLongestSubstring('') //0
// findLongestSubstring('rithmschool) //7
// findLongestSubstring('thisisawesome') //6
// findLongestSubstring('thecatinthehat') //7
// findLongestSubstring('bbbbb') //1
// findLongestSubstring('longestsubstring') //8
// findLongestSubstring('thisishowedoit) //6

// 1. Create an object for seen characters. 
// 2. Loop through string. Check object to see if character has been seen yet
// 3. If a repeated characer appears, close the 


// function findLongestSubstring(){
// 	let characters = {};

// }

function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;
   
	for (let i = 0; i < str.length; i++) {
	  let char = str[i];
	  if (seen[char]) {
		start = Math.max(start, seen[char]);
		console.log(char, seen[char], start)
	  }
	  // index - beginning of substring + 1 (to include current in count)
	  longest = Math.max(longest, i - start + 1);
	  console.log('letter:'+char, 'length:'+longest)
	  // store the index of the next char so as to not double count
	  seen[char] = i + 1;
	}
	return longest;
  }

  findLongestSubstring('thisisawesome') //6
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Time Complexity - O(N+M) 
// Space Complexity - O(1)

// Test Cases 

// isSubsequence('hello', 'hello world'); //true
// isSubsequence('sing', 'sting'); //true
// isSubsequence('abc', 'abracadabra'); //true
// isSubsequence('abc','acb'); //false (order matters)

// 1. Start left point on string1. Set right pointer to string2.
// 2. Compare the two values, if there is no match. Move left pointer up string1. If there is a match, move pointer up string2 and continue comparison.


function isSubsequence(){
	let string1 = arguments[0];
	let string2 = arguments[1];
	let left = 0;
	let right = 0;

	while(left < string1.length){
		console.log(string1[left],string2[right])
		if(string1[left] === string2[right]){ //checks to see if letters are the same; we will move on to the next characters on both strings if there is a match
			if(left === string1.length - 1){ //if we're at the end of string, we will return true because the substring exists
				console.log(true);
				return true;
			}
			left++; 
			right++;
		} else { //if there is no match, we will move onto the next character of string2
			if(right  >= string2.length-1){ //this checks to see if we're at the end of string2; if we are, then we were unable to find all of our first string
				console.log(false)
				return false
			}
			right++
		}
	}

	console.log(false)
	return false
}

// isSubsequence('hello', 'hello world'); //true
// isSubsequence('sing', 'sting'); //true
// isSubsequence('abc', 'abracadabra'); //true
isSubsequence('abc','acb'); //false (order matters)

// Given Solutions
isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))

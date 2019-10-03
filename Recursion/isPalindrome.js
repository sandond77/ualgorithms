// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (Reads the same forward and backward). Otherwise it returns false. 

// Test Cases:
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') //true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') //false

function isPalindrome(str){
	if(!str[0]) { //if it is a palindrome, all letters would be sliced out and str[0] should not exist
		return true
	}

	if(str[0] === str.slice(-1)) {
		return isPalindrome(str.slice(1,-1))
	}

	return false
}

// isPalindrome('awesome') // false

isPalindrome('a')


// Given Solution:
// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }
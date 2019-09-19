

// Anagrams

// Given two strings, write a function to determin if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another such as cinema, formed from iceman.

// Cases
// ('','') returns true
// ('aaz','zza') returns false
// ('anagram', 'nagaram') returns true
// ('rat','car') returns false
// ('awesome','awesom') returns false
// ('qwerty','qeywrt') returns true
// ('texttwisttime','timetwisttext') returns true

// Inputs will be:
// 	single words
// 	no puncutation, numbers, spaces
// 	all lower case letters

function validAnagram(string1,string2){
	if (string1.length != string2.length){
		return false
	};

	let count1 = {};

	for(let i = 0; i < string1.length; i++){
		let letter = string1[i]

		if(count1[letter]){
			count1[letter]++
		} else {
			count1[letter] = 1
		}
	}

	console.log(count1)

	for(let i = 0; i < string2.length; i++){
		let letter = string2[i];
		if(!count1[letter]){
			console.log('false')
			return false;
		} else {
			count1[letter] -= 1
		}
	}

	console.log(true)
	return true

}

validAnagram('aaz','zza') 
validAnagram('anagram', 'nagaram') 
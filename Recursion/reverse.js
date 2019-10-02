// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // emosewa
// reverse('rithmschool') // loohchsmtir

function reverse(str){
	if (str.slice(1) === "") return str;
	return str.slice(1) + str[0] //This works because of FIFO and how functions will resolve
} 

reverse('awesome') // emosewa
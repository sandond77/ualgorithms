function hash (key,arraylen){
	let total = 0;
	for (let char in key){
		let value = char.charCodeAt(0) - 96 
		total = (total + value) % arraylen;
	}
	return total
}
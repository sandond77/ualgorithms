function naiveStringSearch(long, short){
	let counter = 0;
	for (let i=0; i < long.length; i++){
		for(let j=0; j < short.length; j++){
			if(short[j] !== long[i+j]) break
			if (j === short.length - 1) counter++
		}
	}
	console.log(counter)
	return counter
}

naiveStringSearch('lorie loled', 'lol') // returns 1
naiveStringSearch('lorie loled', 'lo') // returns 2
naiveStringSearch('lorie loled', 'go') // returns 0

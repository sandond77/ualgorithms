function naiveStringSearch(long, short){
	let counter = 0;
	for (let i=0; i < long.length; i++){
		for(let j=0; j < short.length; j++){
			console.log(long[i+j],short[j])
			if(short[j] !== long[i+j]){
				console.log('break')
				break
			}

			if (j === short.length - 1){
				console.log('found one')
				counter++
			}
		}
	}
	console.log(counter)
	return counter
}

naiveStringSearch('lorie loled', 'lol')
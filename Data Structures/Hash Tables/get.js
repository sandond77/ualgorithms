class HashTable {
	constructor(size=17){
		this.keyMap = new Array(size)
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for(let i=0; i < Math.min(key.length,100); i++){
			let char = key[i];
			let value = char.charCodeAt() - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}

		return total;
	}

	set(key,value){
		let index = this._hash(key);
		if(!this.keyMap[index]){
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key,value]);
		// console.log(index) 
		return index;
	}

	get(key){
		let index = this._hash(key);
		if(this.keyMap[index]){
			for(let i=0; i<this.keyMap[index].length; i++){
				if(this.keyMap[index][i][0]=== key){
					console.log(this.keyMap[index][i][1])
					return this.keyMap[index][i][1];
				}
			}
		}
		console.log('undefined')
		return undefined;
	}
}

let ht = new HashTable();
ht.set("maroon", "#800000");
ht.set("yellow", '#FFFF00');
ht.set("olive", "808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral","F08080");
ht.set("mediumvioletred","#C71585");
ht.set("plum","#DDA0DD");
// console.log(ht)

ht.get("yellow")
ht.get("yellow123123")
ht.get("maroon")
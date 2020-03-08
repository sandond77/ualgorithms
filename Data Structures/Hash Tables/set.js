class HashTable {
	constructor(size=4){
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
		console.log(index) 
		return index;
	}
}

let ht = new HashTable();
ht.set("hello world", 'goodbye!!');
ht.set("dogs", "are cool");
ht.set("cats", "are fine");
ht.set("i love", "pizza");
ht.set("french","fries");

console.log(ht)
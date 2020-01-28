class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	shift(value){
		let newNode = new Node(value);
		if(this.size === 0){
			this.first = newNode;
			this.last = newNode;
		} else {
			let second = this.first;
			this.first = newNode;
			newNode.next = second;
		}
		this.size++;
		return this.size;
	}

	unshift(){
		if(this.length === 0){
			return null
		}
		let pop = this.first;
		if(this.length === 1){
			this.first = null;
			this.last = null;
		} else {
			let next = pop.next;
			this.first = next;
		}
		pop.next = null;
		this.size--;
		return this.size
	}
}

let list = new Stack();
list.shift(4);
list.shift(3);
list.shift(2);
list.shift(1);

console.log(list)

list.unshift();
console.log(list)
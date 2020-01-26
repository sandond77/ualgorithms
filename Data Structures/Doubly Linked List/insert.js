class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null; 
		this.length = 0;
	}

	push(val){
		let newNode = new Node(val);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop(){
		if(this.length===0){
			return undefined
		} 	
		
		let oldTail = this.tail;
		if(this.length===1){
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}
		
		this.length--;
		console.log(oldTail)
		return oldTail;
	}

	shift(){
		if(this.length===0){
			return undefined;
		}

		let oldHead = this.head;
		if(this.length===1){
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		console.log(oldHead)
		return oldHead;
	}

	unshift(val){
		let newNode = new Node(val);
		if (this.length===0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index){
		let len = this.length;
		if(index < 0 || index >= len){
			return null;
		} else if (index <= len/2){
			let count = 0;
			let current = this.head;
			while(count != index){
				current = current.next;
				count++;
			}
			// console.log(current)
			return current
		} else {
			let count = len-1;
			let current = this.tail;
			while(count != index){
				current = current.prev;
				count--;
			}
			// console.log(current)
			return current
		}
	}

	set(index,value){
		let node = this.get(index);
		if(!node){
			console.log(false)
			return false
		} else {
			node.val = value;
			return true
		}
	}

	insert(index,value){
		if(index < 0 || index > this.length){
			console.log(false)
			return false
		} else if (index === 0){
			this.unshift(value);
		} else if (index === this.length){
			this.push(value);
		} else {
			let newNode = new Node(value);
			let prevNode = this.get(index-1);
			let nextNode = prevNode.next;
			prevNode.next = newNode;
			nextNode.prev = newNode;
			newNode.prev = prevNode;
			newNode.next = nextNode;
			console.log(true)
			return true;
		}
	}
}

let list = new DoublyLinkedList;
list.push(0); 
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

list.insert(1,"INSERTED")

console.log(list)
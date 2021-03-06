class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	push(val){
		let newNode  = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode; 
		}
		this.length++;
		console.log(this)
		return this;
	}
	traverse(){
		let current = this.head;
		while(current){
			console.log(current.val);
			current = current.next;
		}
	}
	pop(){
		if(!this.head){
			return undefined;
		}
		let current = this.head;
		let newTail = current; 

		while(current.next){
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
			console.log('list is empty')
		}
		this.traverse();
		return current;
	}
	
	shift(){
		if(!this.head) return undefined;
		let current = this.head;
		this.head = current.next;
		this.length--;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
			console.log('list is empty')
		}
		this.traverse();
		return current;
	}

	unshift(val){
		let newHead = new Node(val)
		if(!this.head){
			this.head = newHead;
			this.tail = newHead;
		} else {
			newHead.next = this.head;
			this.head = newHead;
		}
		this.length++;
		this.traverse();
		return this
	}

	get(index){
		if(index < 0 || index >= this.length) return null;
		let count=0;
		let current = this.head;
		while(count !== index){
			current = current.next;
			count++;
		}
		console.log(current.val);
		return current;
	}

	set(value,index){
		let current = this.get(index);
		if(current){
			current.val = value;
			console.log(true)
			// console.log(this.traverse())
			return current;
		}
		console.log(false);
		return false;
	}

}


let list = new SinglyLinkedList();
list.push("Hi");
list.push("Bye")
list.push("!")
list.push("Hello")
list.push("World")

list.set("DIE", 7); //should return false
list.set("ABCD", 3); //should return true and update list
console.log(list.traverse());
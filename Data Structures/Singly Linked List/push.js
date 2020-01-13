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
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("You")
list.push("Bye")
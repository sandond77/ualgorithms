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
}

first = new Node(1);
first.next = new Node (2);
first.next.prev = first;

console.log(first)
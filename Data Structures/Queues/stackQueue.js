class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(value){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value){
		let newNode = new Node(value);
		if(!this.first){
			this.first = newNode;
			this.last = newNode;
		} else {
			let oldTail = this.last;
			oldTail.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	dequeue(){
		if (this.size === 0 ){
			return null
		}

		let removed = this.first;
		removed.next = null;
		if(this.size === 1){
			this.first = null;
			this.tail = null;
		} else {
			this.first = this.first.next;
		}
		this.size--;
		console.log(removed);
		return removed;
	}
}


let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();
console.log(queue);
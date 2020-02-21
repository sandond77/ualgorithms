class priorityQueue {
	constructor(){
		this.values = [];
	}

	enqueue(value,priority){
		let newNode = new Node(value,priority);
		this.values.push(newNode);
		this.bubbleUp();
		return this
	}

	bubbleUp(){
		let index = this.values.length-1;
		const element = this.values[index]
		while(index > 0){
			let parentIndex = Math.floor((index-1)/2);
			let parentElement = this.values[parentIndex];
			if(element.priority >= parentElement.priority){break}
			this.values[parentIndex] = element;
			this.values[index] = parentElement;
			index = parentIndex;
		}
	}

	dequeue(){
		const min = this.values[0];
		const end = this.values.pop();
		if(this.values.length > 0){
			this.values[0] = end;
			this.sinkDown();
		}
		console.log(min);
		return min;
	}

	sinkDown(){
		let index = 0;
		const length = this.values.length;
		const element = this.values[0];

		while(true){
			let leftChildIndex = 2*index+1;
			let rightChildIndex = 2*index+2;
			let leftChild, rightChild;
			let swap = null;

			if(leftChildIndex < length){
				leftChild = this.values[leftChildIndex];
				if(leftChild.priority < element.priority){
					swap = leftChildIndex;
				}
			}

			if(rightChildIndex < length){
				rightChild = this.values[rightChildIndex];
				if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
					swap = rightChildIndex;
				}
			}

			if(swap === null) break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}

class Node {
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}

let hospital = new priorityQueue();

hospital.enqueue('cold', 5);
hospital.enqueue('gunshot wound',1);
hospital.enqueue('high fever',4);
hospital.enqueue('broken arm',2);
hospital.enqueue('bad cut',3);
console.log(hospital);

hospital.dequeue();
console.log(hospital);
hospital.dequeue();
console.log(hospital);
hospital.dequeue();
console.log(hospital);
hospital.dequeue();

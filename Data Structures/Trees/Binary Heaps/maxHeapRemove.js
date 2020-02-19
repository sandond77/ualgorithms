class maxBinaryHeap {
	constructor(){
		this.values = [41,39,33,18,27,12];
	}

	insert(element){
		this.values.push(element);
		this.bubbleUp(element);

		console.log(this.values);
		return this.values;
	}

	bubbleUp(element){
		let index = this.values.length-1;
		while(index > 0){
			let parentIndex = Math.floor((index-1)/2);
			let parentElement = this.values[parentIndex];
			if(element <= parentElement){break}
			console.log(element, parentElement)
			this.values[parentIndex] = element;
			this.values[index] = parentElement;
			index = parentIndex;
		}
	}

	extractMax(){
		const max = this.values[0];
		const end = this.values.pop();
		if(this.values.length > 0){
			this.values[0] = end;
			this.sinkDown();
		}
		console.log(max);
		console.log(this.values);
		return max;
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
				if(leftChild > element){
					swap = leftChildIndex;
				}
			}

			if(rightChildIndex < length){
				rightChild = this.values[rightChildIndex];
				if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
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

let heap = new maxBinaryHeap();
heap.insert(55);
heap.extractMax();
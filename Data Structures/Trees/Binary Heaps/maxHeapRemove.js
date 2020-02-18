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
		this.values[0] = end;
		this.sinkDown();
		return max;
	}

	sinkDown(){
		let index = 0;
		const length = this.values.length;
		const element = this.values[0];

		while(true){
			let leftChildIndex = 2*index+1;
			let rightcChildIndex = 2*index+2;
		}
	}
}

let heap = new maxBinaryHeap();
heap.insert(55);
heap.insert(60);
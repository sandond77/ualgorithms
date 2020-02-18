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
}

let heap = new maxBinaryHeap();
heap.insert(55);
heap.insert(60);
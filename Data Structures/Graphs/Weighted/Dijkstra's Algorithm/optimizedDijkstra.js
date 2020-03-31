class PriorityQueue {
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

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex){
		if(!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1,vertex2, weight){
		this.adjacencyList[vertex1].push({node: vertex2, weight});
		this.adjacencyList[vertex2].push({node: vertex1, weight});
	}

	dijkstra(start,finish){
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = [];
		let smallest;

		//creates distance object with infinity
		for(let vertex in this.adjacencyList){
			if(vertex === start){
				distances[vertex] = 0;
				nodes.enqueue(vertex,0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		while(nodes.values.length){
			smallest = nodes.dequeue().val;
			if(smallest === finish){
				while(previous[smallest]){
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if(smallest || distances[smallest] !== Infinity){
				for(let neighbor in this.adjacencyList[smallest]){
					let nextNode = this.adjacencyList[smallest][neighbor]; //finds neighboring nodes

					//calculate the new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if(candidate < distances[nextNeighbor]){
						distances[nextNeighbor] = candidate; //updating new smallest distance to neighbor
						previous[nextNeighbor] = smallest; //updating previous - how we got to neightbor
						nodes.enqueue(nextNeighbor, candidate); //enqueue in priority queue with the new priority
					}
				}
			}
		}
		console.log(distances);
		console.log(previous)
		console.log(path.concat(smallest).reverse());
		return path.concat(smallest).reverse();
	}
}

let graph = new WeightedGraph();


graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B",4);
graph.addEdge("A","C",2);
graph.addEdge("B","E",3);
graph.addEdge("C","D",2);
graph.addEdge("C","F",4);
graph.addEdge("D","E",3);
graph.addEdge("D","F",1);
graph.addEdge("E","F",1);
graph.dijkstra("A","E");
// console.log(graph)

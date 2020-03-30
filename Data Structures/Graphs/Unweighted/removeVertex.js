class Graph {
	constructor(){
		this.adjacencyList = {};
	}

	addVertex(vertex){
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2){
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
	
	removeEdge(vertex1,vertex2){
		//Given Solution
		// this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
		// 	v => v !== vertex2
		// );

		// this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
		// 	v => v !== vertex1
		// );
		let index1 = this.adjacencyList[vertex1].indexOf(vertex2);
		let index2 = this.adjacencyList[vertex2].indexOf(vertex1);

		this.adjacencyList[vertex1].splice(index1, index1+1);
		this.adjacencyList[vertex2].splice(index2, index2+1);
	}

	removeVertex(vertex){
		while(this.adjacencyList[vertex].length){
			const adjacencyVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacencyVertex);
		}

		delete this.adjacencyList[vertex]
	}
}

let g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");

g.addEdge("Dallas","Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas")
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g)

g.removeVertex("Hong Kong")

console.log(g)
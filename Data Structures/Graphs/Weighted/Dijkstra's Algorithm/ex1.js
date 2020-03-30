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
}

// Find shortest path from A to E
			// 	   	  4
			// 	 	A - B
			//   2/  	  \ 3
			//   / 2    2  \
			//  C --  D --   E
			//   4\  1|    / 1
			//        F
let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A","B",9);
graph.addEdge("A","C",5);
graph.addEdge("B","C",7);

console.log(graph)
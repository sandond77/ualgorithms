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

	depthFirstRecursive(start){
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex){
			if(!vertex) return null
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach( neighbor => {
				if(!visited[neighbor]){
					return dfs(neighbor)
				}
			})
		})(start)

		console.log(result);
		return result;
	}

	depthFirstIterative(start){
		const stack = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;
		while(stack.length){
			console.log(stack)
			currentVertex = stack.pop();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach(neighbor => {
				if(!visited[neighbor]){
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			})
		}

		console.log(result);
		return result;
	}
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

				// 			A 
				// 		/		\
				// 		B		C
				// /				\
				// D -------------	E
				// 		\		/
				// 			F

g.depthFirstRecursive("A");
g.depthFirstIterative("A");


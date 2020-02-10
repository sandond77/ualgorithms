class BinarySearchTree {
	constructor(){
		this.root = null;
	}
}

class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);
tree.root.left.right = new Node(7);

console.log(tree)
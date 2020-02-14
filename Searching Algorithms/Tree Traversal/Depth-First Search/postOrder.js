class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor(){
		this.root = null;
	}

	insert(value){
		var newNode = new Node(value);
		if(this.root === null){
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while(true){
				if(value === current.value) return undefined;
				if(value < current.value){
					if(current.left === null){
						current.left = newNode;
						return this
					} else {
						current = current.left;
					}
				} else if (value > current.value){
					if(current.right === null){
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	search(value){
		if(this.root===null){
			console.log(false);
			return undefined
		} else {
			let current = this.root;
			let found = false;
			while(!found && current){
				if(value < current.value){
					current = current.left;
				} else if ( value > current.value){
					current = current.right;
				} else {
					console.log(true);
					return true
				}
			}
			console.log(false);
			return false
		}
	}

	preOrder(){
		let data = [];
		traverse(this.root);

		function traverse(node){
			data.push(node.value);
			if(node.left){
				traverse(node.left);
			}
			if(node.right){
				traverse(node.right);
			}
		}

		console.log(data);
		return data;
	}

	postOrder(){
		let data = [];
		traverse(this.root);

		function traverse(node){
			if(node.left){
				traverse(node.left);
			}
			if(node.right){
				traverse(node.right);
			}
			data.push(node.value);
		}

		console.log(data);
		return data;
	}
}



let tree = new BinarySearchTree();


tree.insert(10);
tree.insert(5);
tree.insert(7);
tree.insert(2);
tree.insert(15);
tree.insert(13);

tree.preOrder();
tree.postOrder();
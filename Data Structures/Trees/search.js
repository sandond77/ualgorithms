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
}



let tree = new BinarySearchTree();

tree.search(1);
tree.insert(10);
tree.insert(5);
tree.insert(7);
tree.insert(2);
tree.insert(15);
tree.insert(13);
tree.insert(17);

tree.search(99);
tree.search(2);

// console.log(tree)
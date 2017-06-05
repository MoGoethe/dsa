function BinarySearchTree(){
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null;
	
	this.insert = function(key){
		var newNode = new Node(key);
		if(root === null){
			root = newNode;
		}else{
			_inserTreeNode(root,newNode);
		}
	}

	function _inserTreeNode(node,newNode){
		if(node.key > newNode.key){
			if (node.left === null) {
				node.left = newNode;
			}else{
				_inserTreeNode(node.left,newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				_inserTreeNode(node.right,newNode);
			}
		}
	}

	this.search = function(key){

	}
	this.inOrderTraverse = function(callback){
		_inOrderTraverseNode(root,callback)
	}
	this.preOrderTraverse = function(callback){
		_preOrderTraverseNode(root,callback)
	}
	this.postOrderTraverse = function(callback){
		_postOrderTraverseNode(root,callback)
	}

	function _inOrderTraverseNode(node,callback){
		if(node !== null){
			_inOrderTraverseNode(node.left,callback);
			callback(node.key);
			_inOrderTraverseNode(node.right,callback);
		}
	}
	function _preOrderTraverseNode(node,callback){
		if(node !== null){
			callback(node.key);
			_preOrderTraverseNode(node.left,callback);
			_preOrderTraverseNode(node.right,callback);
		}
	}
	function _postOrderTraverseNode(node,callback){
		if(node !== null){
			_postOrderTraverseNode(node.left,callback);
			_postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	}

	this.min = function(){
		return _minNode(root);
	}

	function _minNode(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	}

	this.max = function(){
		return _maxNode(root);
	}

	function _maxNode(node){
		if(node){
			while(node && node.right !== null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	}

	this.has = function(key){
		return _has(root,key);
	}
	function _has(node,key){
		if(node === null){ //如果当前节点为空那么未找到
			return false;
		}
		if(node.key > key){
			return _has(node.left,key);  //如果需要返回值则 使用return
		}else if(node.key < key){
			return _has(node.right,key);
		}else{
			return true;
		}
	}
	this.removeNode = function(key){
		root = _removeNode(root,key);
	}
	function _removeNode(node,key){
		if(node === null){
			return null;
		}
		if(key<node.key){
			node.left = _removeNode(node.left,key);
			return node;
		}else if(key>node.key){
			node.right = _removeNode(node.right,key);
			return node;
		}else{
			//找到要移除的节点了
			//如果左右节点均为空，那么直接移除即可

			if(node.left === null && node.right = null){
				node = null;
				return node;
			} 
			//一个节点为空，不管另一个节点的值是否为空，
			if(node.left === null){
				node = node.right;
				return node;
			}else if(node.right === null){
				node = node.left;
				return node;
			}
			var aux = _findMinNode(node.right);
			node.key  = aux.key;
			node.right = _removeNode(node.right,aux.key);
			return node;
		}
	}
	function _findMinNode(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node;
		}
		return null;
	}

}

function printNode(value){
	console.log(value);
}

var tree = new BinarySearchTree();

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

tree.inOrderTraverse(printNode);
tree.postOrderTraverse(printNode);
tree.preOrderTraverse(printNode);

console.log("min:",tree.min());
console.log("max:",tree.max());

console.log(tree.has(20));
console.log(tree.has(200));

tree.removeNode(9);

console.log(tree.has(9));












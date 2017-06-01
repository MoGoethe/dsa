//linklist
function LinkedList(){
	function Node(element) {
		this.element = element;
		this.next = null;
	}
	var length = 0;
	var head =null;
	this.append= function(element){
		//If linklist is null head = Node
		var node = new Node(element),
			current;
		if(head === null){
			head= node;
		}else{
			current = head; //form first node to lash node,if next node is existence node =node.next 
			while(current.next){
				current = current.next;  //get last node
			}
			current.next = node;
		}
		length ++;
		this.print();
	}
	this.insert = function(element,position){
		if(position>length || position<0){
			console.log("Error");
			return false;
		}
		var node = new Node(element),
			current = head,
			index = 0,
			prevNode,
			nextNode;
		if(position == 0){
			node.next =current;
			head = node;
		}else{
			while(index++ < position){
				prevNode = current;
				current = current.next;
			}
			node.next =current;
			prevNode.next = node;
		}
		length++;
		return true;
	}
	this.removeAt = function(position){
		if(position>length || position<0){
			console.log("Error");
			return false;
		}
		var current = head,
			index = 0,
			nextNode;
		if(position==0){
			head = current.next;
		}else{
			while(index++ < position){
				nextNode = current;
				current = current.next;
			}
			nextNode.next = current.next;
		}

	}
	this.remove = function(element){
		this.removeAt(this.indexOf(element));
		length--;
	}
	this.indexOf = function(element){
		var current = head,
			index = 0;
		while(current){
			if(element == current.element){
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}
	this.isEmpty = function(){
		return length == 0;
	}
	this.size = function(){
		return length;
	}
	this.getHead = function(){
		return head;
	}
	this.toString = function(){
		var linkListStr = '';
		if(head===null){
			return null	
		}else{
			var current = head;
			while(current.next){
				linkListStr = linkListStr + current.element + ',';
				current = current.next;
			}
			linkListStr = linkListStr + current.element;
			return linkListStr;
		}
	}
	this.print = function(){
		var linkListPrintStr = this.toString();
		linkListPrintStr === null ? console.log('linklist is nill') : console.log(linkListPrintStr);
	}
}
/*
var ll = new LinkedList();
ll.append(5);
ll.append(10);

console.log(ll.indexOf(10));
console.log(ll.size());
ll.print();
*/
module.exports = LinkedList;









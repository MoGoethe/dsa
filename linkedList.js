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

	}
	this.removeAt = function(position){

	}
	this.remove = function(element){

	}
	this.indexOf = function(element){

	}
	this.isEmpty = function(){
		return length == 0;
	}
	this.size = function(){
		return length;
	}
	this.getHead = function(){

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
var ll = new LinkedList();
ll.append(5);
ll.append(10);









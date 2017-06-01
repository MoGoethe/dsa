function doublyLinkedList(){
	function Node(element){
		this.element = element;
		this.next = null;
		this.prev = null;
	}
	var length = 0,			//长度
		head = null,		//头部
		tail = null;		//尾部
	this.enDList = function(element){
		var node = new Node(element);
		var current = head,
			previous;
		if(head == null){
			head = node;
			tail = node;
		}else{
			while(current.next){
				previous = current;
				current = current.next;
			}
			node.prev = current;
			previous.next = node;
			tail = node;
		}
		length++;
	}
	this.remove = function(element){
		//update length,tail
		if(!head){
			console.log("doublyLinkedList is null")
			return false;
		}
		var current = head;
		    previous;
		while(current){
			previous = current;
			current = current.next;
			if(previous.element == element){
				previous.prev.next = current;
				current.prev = previous.prev;
			}
		}
		console.log("doublyLinkedList is null");
		return false;
	}
	this.removeAt = function(position){
		if(position<0 || position > length){
			console.log("error");
			return false;
		}
		var index = 0,
			current = head,
			previous;
		if(position == 0){
			head = current.next;
			if(length == 1){
				tail = null;
			}else{
				head.prev = null;
			}
		}else if(position == length-1){
			while(current.next){
				previous = current;
				current = current.next;
			}
			previous.next = null; 
			tail = previous;
		}else{
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			current.next.prev = previous;
		}
		length--;
		return current.element;
	}
	this.insert = function(position,element){
		var node = new Node(element);
		var index = 0,
			current = head,
			previous;
		if(position === 0){
			if(!head){//if is null
				head = node;
				tail = node;
			}else{
				node.next = head.next;
				node.prev = current;
				head = node;
			}
		}else if(position == length){
			current = tail;
			node.prev = current;
			current.next = node;
			tail = node;
		}else{
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			node.next = current;
			node.prev = previous;
			current.prev = node;
			previous.next = node;
		}
		length++;
	}
}

var dl = new doublyLinkedList();
dl.enDList(5);
dl.enDList(6);
dl.enDList(7);

console.log(dl);














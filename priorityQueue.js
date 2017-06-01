//priorityQueue

function priorityQueue(){
	var items = [];
	function priorityQueueElement(element,priority){
		this.element = element;
		this.priority = priority;
	}
	this.enqueue = function(element,priority){
		var Node = new priorityQueueElement(element,priority);
		if(items.length == 0){
			items.push(Node)
		}else{
			var added = false;
			for(var i=0;i<items.length;i++){
				if(Node.priority < items[i].priority){
					items.splice(i,0,Node);
					added = true;
					break;
				}
			}
			if(!added){
				items.push(Node);
			}
		}
	}
	this.print =function(){
		console.log(items);
	}
}
//test
var pQ = new priorityQueue();
pQ.enqueue("a",1);
pQ.enqueue("b",2);
pQ.enqueue("c",3);
pQ.enqueue("d",1);
pQ.print();
var Queue =require('./queue');

function hotPotato(queueList,num){
	var queue =new Queue(),

	for(var i=0;i<queueList.length;i++){
		queue.enqueue(queueList[i]);
	}
	var eliminated = '';

	while(queue.size() > 1){
		for(var i=0;i<num;i++){
			queue.enqueue(queue.dequeue());  
		}
		eliminated = queue.dequeue();
	}
	return queue.dequeue()
}



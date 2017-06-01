var LinkedList = require("./linkedList.js");

function hashMap(){
	var table = [];
	/*
		第一个版本会有很大的漏洞  
		出现相同的hashCode的时候会覆盖原本的数据
		导致丢失数据
	*/
	var loseloseHashCode = function(key){
		var hash = 0;
		for(var i=0;i<key.length;i++){
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	}
	this.put = function(key,value){
		if(table[loseloseHashCode(key)] === undefined){
			var queue = new LinkedList();
			queue.in
			table[loseloseHashCode(key)] = queue;
		}else{

		}
	}
	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined; // just let this position be undefined,don't need delete;
	}
	this.get = function(key){
		return table[loseloseHashCode(key)];
	}
	// other function same as;
}
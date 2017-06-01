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
	var VaulePair = function(key,value){
		this.key = key;
		this.value = value;
	}
	this.put = function(key,value){
		var position = loseloseHashCode(key);
		if(table[position] == undefined){
			table[position] = new LinkedList();
		}
		table[position].append(new VaulePair(key,value));
	}
	this.remove = function(key){
		var position = loseloseHashCode(key);
		if(table[position] == undefined){
			return false;
		}else{
			var current = table[position].getHead();
			while(current.next){
				if(current.element.key == key){
					table[position].remove(current.element);
					if(table[position].isEmpty()){
						table[position] = undefined;
					}
					return true;
				}
				current =current.next;
			}
			if(current.element.key = key){
				table[position].remove(current.element);
				if(table[position].isEmpty()){
					table[position] = undefined;
				}
				return true;
			}
		} // just let this position be undefined,don't need delete;
	}
	this.get = function(key){
		var position = loseloseHashCode(key);
		if(table[position] == undefined){
			return undefined;
		}else{
			var current = table[position].getHead();
			while(current.next){
				if(current.element.key == key){
					return current.element.value;
				}
				current =current.next;
			}
			if(current.element.key = key){
				return current.element.value;
			}
		}

	}
	// other function same as;
}

var hash = new hashMap();

hash.put("Jma","seaseeyoul@qq.com");
hash.put("Jam","1095364870@qq.com");
hash.put("Jone","1095364870@qq.com");
console.log(1,hash.get("Jma"));
console.log(2,hash.get("Jam"));
console.log(3,hash.get("Jone"));
console.log(4,hash.remove("Jone"));
console.log(5,hash.get("Jone"));







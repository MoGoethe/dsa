function Set() {
	var items = {};
	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		console.log("Already exists");
		return false;
	}
	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	}
	this.has = function(value){
		return value in items;
	}
	this.clear = function(){
		items = {};
	}
	this.size = function(){
		var count = 0;
		for(prop in items){
			if(items.hasOwnProperty(prop)){
				++count;
			}
		}
		return count;
	}
	this.values = function(){
		var keys = [];
		for(prop in items){
			if(items.hasOwnProperty(prop)){
				keys.push(items[prop]);
			}
		}
		console.log(keys);
		return keys;
	}
	this.union = function(otherSet){//并集
		var unionSet = new Set(),
			thisValue = this.values(),
			otherValue = otherSet.values();
		for(var i= 0; i< thisValue.length; i++){
			unionSet.add(thisValue[i]);
		}
		for(var i= 0; i< otherValue.length; i++){
			unionSet.add(otherValue[i]);
		}
		return unionSet;
	}
	this.intersection = function(otherSet){
		var intersectionSet = new Set(),
			thisValue = this.values();
		for(var i=0; i<thisValue.length; i++){
			if(otherSet.hasOwnProperty(thisValue[i])){
				intersectionSet.add(thisValue[i]);
			}
		}
		return intersectionSet;
	}
	this.difference = function(otherSet){
		var differenceSet = new Set(),
			thisValue = this.values();
		for(var i=0; i<thisValue.length; i++){
			if(!otherSet.hasOwnProperty(thisValue[i])){
				differenceSet.add(thisValue[i]);
			}
		}
		return differenceSet;
	}
	this.subset = function(otherSet){
		if(this.size<otherSet.size){
			return false;
		}else{
			var thisValue = this.values();
			for(var i=0;i<thisValue.length;i++){
				if(!otherSet.hasOwnProperty(thisValue[i])){
					return false;
				}
			}
			return true;
		}
	}
}

var s = new Set();

s.add(1);
s.add(2);
s.add(3);
console.log(s.size());
console.log(s.has(2));
s.values();









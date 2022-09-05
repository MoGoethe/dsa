function Dictionary(){
	var items = {};
	this.set = function(key,value){
		items[key] = value;
	}
	this.remove = function(key){
		if(this.has(key)){
			delete items[key];
			return true;	
		}
		return false;
	}
	this.has = function(key){
		return key in items;
	}
	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	}
	this.clear = function(){
		items = {};
	}
	this.size = function(){
		var counter = 0;
		for(var key in items){
			if(items.hasOwnProperty(key)){
				counter++;
			}
		}
		return counter;
	}
	this.keys = function(){
		var keys = [];
		for(var key in items){
			if(items.hasOwnProperty(key)){
				keys.push(key);
			}
		}
		return keys;
	}
	this.values = function(){
		var values = [];
		for(var key in items){
			if(items.hasOwnProperty(key)){
				values.push(items[key]);
			}
		}
		return values;
	}
	this.getDictionary = function(){
		return items;
	}
}
/*
var d = new Dictionary();

d.set("name","seaseeyoul");
console.log(d.values(),d.size(),d.get("name"));
*/

module.exports = Dictionary;



function hashMap(){
	var table = [];
	var loseloseHashCode = function(key){
		var hash = 0;
		for(var i=0;i<key.length;i++){
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	}
	this.put = function(key,value){
		table[loseloseHashCode(key)] = value;
	}
	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined; // just let this position be undefined,don't need delete;
	}
	this.get = function(key){
		return table[loseloseHashCode(key)];
	}
	// other function same as;
}
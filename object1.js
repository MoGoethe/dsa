function Person(name){
	this.name = name;
}

Person.prototype.getName = function(){
	return this.name;
}

var p1 = new Person('Joe');

console.log(p1.name);
console.log(p1.getName());
console.log(Object.getOwenPrototypeof(p1) === Person.prototype);
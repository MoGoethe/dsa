var Dictionary = require("./map.js");

function Graph(){
	var vertices = [];
	var adjList = new Dictionary();  //字典{} 属性：值

	//添加一个新的顶点
	this.addVertex = function(v){
		vertices.push(v);
		adjList.set(v,[]); //设置v定点的连通点为一个数组，每有一个顶点，就push进这个数组	
	};
	//给一个点添加一个新的链接点。
	this.addEdge = function(v,w){
		adjList.get(v).push(w); //相互连通
		adjList.get(w).push(v);
	};
	this.toString = function(){
		var s = '';
		for(var i=0;i<vertices.length;i++){
			s = s + vertices[i] + ":" + adjList.get(vertices[i]) + "\n";
		}
		return s;
	}
}

var myVertices = ["A","B","C","D","E","F","G","H","I"];
var graph = new Graph();
for(var j=0;j<myVertices.length;j++){
	graph.addVertex(myVertices[j]);
}

graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("A","D");
graph.addEdge("C","D");
graph.addEdge("C","G");
graph.addEdge("D","G");
graph.addEdge("D","H");
graph.addEdge("B","E");
graph.addEdge("B","F");
graph.addEdge("E","I");


console.log(graph.toString());









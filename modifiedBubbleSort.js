function modifiedBubblewSort(arr){
	var length = arr.length;
	for(var i=0;i<length;i++){
		for(var j=0; j<length-1-i;j++){
			if(arr[j]>arr[j+1]){
				var current = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = current;
			}
		}
	}
	return arr;
}

//优化版

var arr1 = [7,3,4,9,5,1,8];
console.log(modifiedBubblewSort(arr1));
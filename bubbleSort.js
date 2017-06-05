function bubbleSort(arr){
	var length = arr.length;
	for(var i=0; i<length;i++){
		for(var j =0; j<length-1;j++){
			if(arr[j] > arr[j+1]){
				var current = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = current;
			}
		}
	}
	return arr;
}

var arr1 = [7,3,4,9,5,1,8];

console.log(bubbleSort(arr1));
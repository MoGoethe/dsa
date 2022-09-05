function selectionSort(arr){
	var length = arr.length,
		minIndex;
	var k =0;
	for(var i=0; i<length-1;i++){
		minIndex = i;
		for(var j=i;j<length;j++){
			if(arr[minIndex] > arr[j]){
				minIndex = j;  //找到最小值的索引
			}
		}
			console.log("第",k,"次:",arr);
			k++;
		if(i !== minIndex){
			var current = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = current;
		} //当前位置与最小值位置交换位置
	}
	return arr;
}

var arr1 = [7,3,4,9,5,1,8];
console.log(selectionSort(arr1));
function swapValue(arr){
    for(i=0;i<arr.length;i++){
        var temp = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = temp;
    }
    return arr;
}
console.log(swapValue([5,2,6,1]));
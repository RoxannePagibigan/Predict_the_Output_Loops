function multiplyArr(arr,num){
    for(i=0;i<arr.length;i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(multiplyArr([2,4,6],2));
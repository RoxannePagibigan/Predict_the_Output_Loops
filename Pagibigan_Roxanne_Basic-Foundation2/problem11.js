function negativeArr(arr){
    var newArr = [];
    for(i=0;i<arr.length;i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(negativeArr([1,2,-3]));
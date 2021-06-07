function addOne(arr){
    for(i = 1; i<arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}
console.log(addOne([1,2,3,4,5]));
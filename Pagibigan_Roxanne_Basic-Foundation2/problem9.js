function addSeven(arr){
    var newArr = [];
    for(i = 0; i<arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    return newArr;
}
console.log(addSeven([1,2,3]));
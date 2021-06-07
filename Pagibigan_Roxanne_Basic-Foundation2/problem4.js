function doubleArr(arr){
    var newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(doubleArr([1,5,3]));
function previousLength(arr){
    for(var i = arr.length-1;i>0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLength(["hello", "dojo", "awesome"]));
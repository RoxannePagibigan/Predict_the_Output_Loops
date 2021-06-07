function bigPositive(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(bigPositive([-1,0,2,1,-4]));
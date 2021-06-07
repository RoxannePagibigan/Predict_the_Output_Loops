function printReturn(arr){
    for(let i = 0; i<arr.length; i++){
        console.log(arr[arr.length - 2]);
        if(arr[i] % 2 == 1){
            return arr[i];
        }
    }
}
console.log(printReturn([1,6,2,5,4]));
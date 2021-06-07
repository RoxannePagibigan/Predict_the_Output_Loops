function countPositive(arr){
    var count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}
console.log(countPositive([1,0,-1,-2,1]));
function reverseArr(arr){
    for(i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reverseArr([3,1,6,4,2,5]));
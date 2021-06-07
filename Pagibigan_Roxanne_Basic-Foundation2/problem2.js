function lowHigh(arr){
    var low = 0;
    var high = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
        else if(arr[i] > high){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(lowHigh([1,2,-3,5]));
function problem11(arr){
    var Max = 0;
    var Min = 0;
    var sum = 0;
    for(i=0; i<arr.length; i++){
        if(Max < arr[i]){
            Max = arr[i];
        }
        if(Min > arr[i]){
            Min = arr[i];
        }
        sum = sum + arr[i];
    }
    var Avg = sum / arr.length;
    var newArr = [Max, Min, Avg];
    return newArr;
}
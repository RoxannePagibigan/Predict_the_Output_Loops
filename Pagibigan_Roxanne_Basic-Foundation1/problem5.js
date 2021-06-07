function problem5(arr){
    var Max = 0;
    for(i=0; i<arr.length; i++){
        if(Max < arr[i]){
            Max = arr[i];
        }
    }
    return Max;
}
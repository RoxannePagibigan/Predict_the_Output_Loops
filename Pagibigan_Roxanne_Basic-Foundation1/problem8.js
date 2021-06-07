function problem8(arr, y){
    var count = 0;
    for(i=0; i<arr.length; i++)
    if(arr[i] > y){
        count++
    }
    return count;
}
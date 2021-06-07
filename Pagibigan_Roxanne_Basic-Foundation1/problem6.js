function problem6(arr){
    var sum = 0;
    var ave = 0;
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i];
        ave = sum / arr.length;
    }
    return ave;
}
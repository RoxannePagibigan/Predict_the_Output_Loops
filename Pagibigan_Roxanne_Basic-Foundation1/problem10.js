function problem10(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]< 0){
            arr[i] = 0;
        }
    }
    return arr;
}
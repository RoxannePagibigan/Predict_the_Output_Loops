function problem3(){
    var num = 0;
    var sum = 0;
    for(i=1; i<5001; i++){
        if(i%2==1){
            sum = sum + i;
        }
    }
    return sum;
}
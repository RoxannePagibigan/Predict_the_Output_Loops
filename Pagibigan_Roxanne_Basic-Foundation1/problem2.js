function problem2(){
    var sum = 0;
    for(i=1; i<1001; i++){
        if(i%2==0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(problem2());
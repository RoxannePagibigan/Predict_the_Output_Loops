function evenOdd(arr){
    var even = 0;
    var odd = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] % 2 == 1){
            odd++;
            even = 0;
        }
        else{
            even++;
            odd = 0;
        }
        if(even == 3){
            console.log("Even more so!");
        }
        else if(odd == 3){
            console.log("That's odd!");
        }
    }
}
evenOdd([1,1,1,2,2,2,3,3,3])

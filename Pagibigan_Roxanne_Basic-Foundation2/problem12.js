function yummyFood(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] == "food"){
            console.log("yummy");
        }
        else{
            console.log("I'm hungry");
        }
    }
}
yummyFood([1,2,"food"]);
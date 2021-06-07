// function sigma(num){
//     var sum = 0;
//     for(i = 0; i<num; i++){
//         if( i > 0){
//             sum = sum + i;
//         }
//     }
//     return sum;
// }
// console.log(sigma(2));

function factorial(num){
    for(i = 1; i<num; i++){
        if( i > 0){
            num = num * i;
        }
    }
    return num;
}
console.log(factorial(1,2,3));

// function Fibonacci(num){
    
// }

// function secondtoLast(arr){
//     var lastnum = 0;
//     for(i=0; i<arr.length; i++){
//         lastnum = arr[arr.length-2];
//     }
//     return lastnum;
// }
// console.log(secondtoLast[1,2,3,4]);
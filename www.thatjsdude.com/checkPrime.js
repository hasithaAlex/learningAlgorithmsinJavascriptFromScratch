//Question: How would you verify a prime number?
//Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 
//1. (look at the code example. If you dont get it. this is not your cake. do learn javaScript basics and come back.)





////////////////////////////////////
/////                           ////
/////   GO DOWN                 ////
/////                           ////
////////////////////////////////////

















function isPrimeNumber(number){
    var divisor = 2;
    while(divisor<number){
        if(number%divisor===0)
            return false;
        
        divisor++;
    }
    return true;
}

console.log(isPrimeNumber(237));
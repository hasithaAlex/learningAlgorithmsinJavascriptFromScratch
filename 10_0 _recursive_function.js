////////////////////////////
//using recursive function//
////////////////////////////
//factorial of 4 equal 4*3*2*1

function factorial(number) {
    if(number==1){
        return number;
    }else{
        return factorial(number-1)*number;
    }
}

console.log(factorial(3))
//*****************************************************************//
/////////////////////////////////////////////////////////////////////
//////////////////////////1,1,2,3,5,8,13,21....//////////////////////
/////////////////////////////////////////////////////////////////////
//*****************************************************************//

function fibonacci(number) {
    if(number<3) return 1;
    else return fibonacci(number-1) + fibonacci(number-2);
}

console.log(fibonacci(4));
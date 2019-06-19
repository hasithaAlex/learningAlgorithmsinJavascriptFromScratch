///////////////////////////////////
//pass=>20
//if num/3       fizz
//if num/5       bazz   
//if num/3 OR 5  fizzbazz
////////////////////////////////////
function fizzbazz(num) {
    for (let index = 1; index <= num; index++) {
        if(index%3==0 && index%5==0){
            console.log('fizzbazz')
        }else if(index%3==0){
            console.log('fizz')
        }else if(index%5==0){
            console.log('bazz')
        }else{
            console.log(index);  
        }
    }
}
fizzbazz(30)
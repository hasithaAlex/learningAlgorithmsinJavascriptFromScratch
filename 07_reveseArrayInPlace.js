///using one array
function reverseArray(array) {
    for(var i=0; i<array.length/2; i++){
        var temp = array[i];
        array[i] = array[array.length-(i+1)];
        array[array.length-(i+1)] = temp;
    }
    return array;
}


///(MY) using two array with using variable 
function my_reverseArray(array) {
    var newArray = [];
    var count = 0;
    for(var i=array.length-1; i>=0;i--){
        newArray[count++] = array[i]
    }
    return newArray;
} 


console.log(reverseArray([12,22,33,55,66]));
console.log(my_reverseArray([12,22,33,55,66]));
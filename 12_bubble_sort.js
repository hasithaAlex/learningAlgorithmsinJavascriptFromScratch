//larger numbes will bubble up to the top of the array
// * *
//[2,8,4,6,7,0,9]
//[2,8,4,6,7,0,9]
//[2,4,8,6,7,0,9]
//[2,4,6,8,7,0,9]
//[2,4,6,7,8,0,9]
//[2,4,6,7,0,8,9]
//[2,4,6,7,0,8,9]
//   * *
//[2,4,6,7,0,8,9]

function bubble_sort(array) {
    for(var i=array.length-1; i>0; i--){
        for(var j=0; j<i; j++){
            if(array[j]<array[j+1])
                continue;
            
            var temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }

    return array;
}

console.log(bubble_sort([2,8,4,6,7,0,9]));
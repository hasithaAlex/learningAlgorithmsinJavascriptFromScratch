function twoSum(numArray, number) {   
    var pairHashTable = [];
    for(var i=0;i<numArray.length;i++){
        var currentElement = numArray[i];

        var otherNumber = number - currentElement;
        if(numArray.indexOf(otherNumber)>-1){
            pairHashTable.push([currentElement,otherNumber]);            
        }
    }

    return  pairHashTable;
}

console.log(twoSum([2,1,6,4,3,5],7))
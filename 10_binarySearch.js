//////////////////////////////////////////
//binary search using recursive function//
//////////////////////////////////////////

function binarySearch(sortedNumArray,key) {
    var middleIndex = Math.floor(sortedNumArray.length/2);
    var middleValue = sortedNumArray[middleIndex];

    if(middleValue===key) 
        return true;
    else if(middleValue>key && sortedNumArray.length>1)
        return binarySearch(sortedNumArray.splice(0,middleIndex),key)
    else if(middleValue<key && sortedNumArray.length>1)
        return binarySearch(sortedNumArray.splice(middleIndex,sortedNumArray.length),key);
    else
        return false; 
}

console.log(binarySearch([4,5,9,16,17,18],5));


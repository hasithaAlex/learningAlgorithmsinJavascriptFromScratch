
function meanMedianMode(array) {
    return {
        mean:getmean(array),
        median:getmedian(array),
        mode:getmode(array),
    }    
}

function getmean(array){
    var sum = 0;
    array.forEach(num=>{
        sum += num;
    });

    console.log(sum/array.length);
}

function getmedian(array){
    array.sort(function (a,b) {return a-b});

    var median = 0;
    if(array.length%2!==0)
    {
        median = array[Math.floor(array.length/2)];
    }
    else {
        var mid1 = array[(array.length/2)-1];
        var mid2 = array[array.length/2];
        median = mid1+mid2/2;
    }

    console.log(median);
}

function getmode(array){
    var arrayObj = {};
    array.forEach(num=>{
        if(!arrayObj[num])
            arrayObj[num] = 0;
        
        arrayObj[num]++;    
    })

    var maxFrequency = 0;
    var modes = [];
    for(var num in arrayObj){
        if(maxFrequency<arrayObj[num]){
            maxFrequency = arrayObj[num];
            modes = [num];
        }else if(maxFrequency==arrayObj[num]){
            modes.push(num);
        }
    }
    if(modes.length === Object.keys(arrayObj).length)
        modes = [];    
    
    console.log(modes);
}


meanMedianMode([5,2,3,1,1,1,4,4,3,4]);
console.log("==============================")
meanMedianMode([5,5,3,3,6,6]);

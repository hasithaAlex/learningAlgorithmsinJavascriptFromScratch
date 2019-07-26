function count(word){
    var obj = {}
    for(let i=0;word.length>i; i++){
        if(obj[word[i]]){
            obj[word[i]]++;
        }else{
            obj[word[i]] = 1;
        }
    }
    return obj;
}

console.log(count("tersasd"));



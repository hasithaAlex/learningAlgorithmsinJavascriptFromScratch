function count(word){
    var obj = {}
    word = word.replace(/[^a-z]/gi,"");
    for(let i=0;word.length>i; i++){
        if(obj[word[i]]){
            obj[word[i]]++;
        }else{
            obj[word[i]] = 1;
        }
    }
    return obj;
}

console.log(count("tersassas@@d"));



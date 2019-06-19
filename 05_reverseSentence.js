//easyway
function reverseSentence(word){
    var wordsArr = word.split('');
    return wordsArr.reverse().join('')
}

function reverseSentence2(word){ 
    var wordsArr = word.split('');

    var newWordsArr = []
    for(var i=wordsArr.length; 0<=i; i--){
        newWordsArr.push(wordsArr[i])
    }   

    return newWordsArr.join('')
}

console.log(reverseSentence("I set of words that is complete in itself, typically"))
console.log(reverseSentence2("set of words that is complete in itself, typically"))
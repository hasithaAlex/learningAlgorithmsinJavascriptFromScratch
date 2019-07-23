function reverseWords(words){
    var wordsArr = words.split(' ');
    var newWordsArr = [];
    wordsArr.forEach(word=>{
        var reverseWord = [];
        for(var i=word.length-1; i>=0; i--){
            reverseWord.push(word[i]);
        }
        newWordsArr.push(reverseWord.join(''));
    });
    return newWordsArr.join(' ')
}
console.log(reverseWords("I set of words that is complete in itself, typically"))



function reverseWords(words){
    var wordsArr = words.split(' ');

    var newWordsArr = [];
    wordsArr.forEach(word=>{
        var reverseWord = "";
        for(var i=word.length-1; i>=0; i--){
            reverseWord +=word[i];
        }
        newWordsArr.push(reverseWord);
    });
    return newWordsArr.join(' ')
}
console.log(reverseWords("I set of words that is complete in itself, typically"))

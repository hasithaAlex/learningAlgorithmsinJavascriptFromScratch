
var word = "hi how are you!"
var charArray = word.split('');
var charreverseArray = [];
for (let index = charArray.length; 0 < index; index--) {
    charreverseArray.push(charArray[index]);    
}

console.log(charreverseArray.join(''))
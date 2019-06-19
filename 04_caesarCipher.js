function caesarCipher(str,num){
    var lowercaseStr = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.slice('');

    var newString = "";
    
    for(var i = 0; i < lowercaseStr.length; i++){
        var currentLetter = lowercaseStr[i];
        if (currentLetter ==' ') {
            newString+=currentLetter;
            continue;
        }  

        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if(newIndex>25){
            newIndex = newIndex - 26;
        }

        if(newIndex<0){
            newIndex = newIndex + 26;
        }

        if (str[i].toUpperCase()===str[i]) {
            newString += alphabet[newIndex].toUpperCase();         
        }else{
            newString += alphabet[newIndex];
        }
    }

    return newString;
}

console.log(caesarCipher("abc haSi z",-1));
///////////////////////////////////////////////////////////
//take string as argument return ture if it is palindrome//
//if not false                                           //
///////////////////////////////////////////////////////////
function isPalindrme(paramString) {
    paramString = paramString.toLowerCase();
    var charactersArray = paramString.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArray.forEach(char => {
        if (validCharacters.indexOf(char) > -1)
            lettersArr.push(char);
    });

    if (lettersArr.join('') === lettersArr.reverse().join(''))
        return true;
    else
        return false;
}

console.log(isPalindrme("Madam I'm Adam"));


function harmlessRansomNote(noteText, magazineText) {
    noteTextArr= noteText.split(' ')
    magazineTextArra= magazineText.split(' ')
    magazineObject = {};

    magazineTextArra.forEach(word => {
        if(!magazineObject[word])
            magazineObject[word] = 0;
            
        magazineObject[word]++;
    });

    var noteIsPossible = true;
    noteTextArr.forEach(word =>{
        if(magazineObject[word]){
            magazineObject[word]--;
            
            if(magazineObject[word]<0) 
                noteIsPossible = false;
        }else {
            noteIsPossible = false;
        }
            
    })

    return noteIsPossible;
}


console.log(harmlessRansomNote('Cable Cable Cable',"Cable Cable News Network is an News Today")); 
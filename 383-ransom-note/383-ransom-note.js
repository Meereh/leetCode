/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let count = 0;
     for(let i of ransomNote){
         let idx = magazine.indexOf(i);
         if(idx>=0){
            magazine = magazine.replace(i,"-");
             count ++;
         }else{
             return false;
         }
    }
    
    if(ransomNote.length === count){
        return true;
    }else{
        return false;
    }
};
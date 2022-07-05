/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const tarr = t.split('')
    const sarr = s.split('')

    tarr.sort()
    sarr.sort()
    if(tarr.length !== sarr.length){
        return false;
    }else{
        for(let i =0; i<tarr.length;i++){
            if(sarr[i]===tarr[i]){
                continue;
            }else{
                return false;
            }
        }


        return true;
    }

    
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    s = s.replace(reg, "");
    s = s.toLowerCase();
    let half = Math.floor(s.length/2)
    for(let i = 0; i<half;i++){
        if(s[i] === s[s.length-1 -i]){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
};
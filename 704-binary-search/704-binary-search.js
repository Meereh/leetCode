/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index = nums.indexOf(target);
    if(index<0){
        return -1;
    }else{
        return index;
    }
    
};
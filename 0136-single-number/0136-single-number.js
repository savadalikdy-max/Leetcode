/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let rslt=0;
    for(let num of nums){
        rslt=rslt^num
    }
    return rslt
};
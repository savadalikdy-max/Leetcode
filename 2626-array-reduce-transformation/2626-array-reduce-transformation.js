/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let rslt=init
    for(let i=0;i<nums.length;i++){
        rslt=fn(rslt,nums[i]);
    }
    return rslt
};
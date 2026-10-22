/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let rslt = 0;
    for (let i = 0; i < nums.length; i++) {
        rslt = rslt ^ nums[i];
    }
    return rslt;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max = Math.max(...nums);
    let mv = 0;

    for(let i = 0; i < nums.length; i++){
        mv += max - nums[i];
    }

    return mv;
};
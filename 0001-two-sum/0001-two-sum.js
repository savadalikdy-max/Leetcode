/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj={};
let i=0;
for(let num of nums){
    let nd =target-num
    if(nd in obj){
        return [obj[nd],i];
    }
    obj[num]=i;
    i++;
}

console.log(twoSum([2, 7, 11, 15],9))
    
    
};
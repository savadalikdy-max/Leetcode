/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let sub ="";
    let max=0;
    for(let x of s){
        while(sub.includes(x)){
            sub=sub.slice(1)
        }
        sub+=x
         max = Math.max(max, sub.length);
    }
    return max
};

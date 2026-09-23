/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a=x.toString().split("")
    let b=a.reverse().join("")
    return x.toString()=== b
};
isPalindrome(121);
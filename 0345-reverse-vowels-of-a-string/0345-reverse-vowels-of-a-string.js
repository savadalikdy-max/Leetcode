/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let a=s.split("")
    let b= a.filter(c => "aeiouAEIOU".includes(c)).reverse();
    return a.map(c => "aeiouAEIOU".includes(c)?b.shift():c).join("")
};
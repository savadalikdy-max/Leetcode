/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const letters = s.match(/[a-zA-Z]/g) || [];
    return s.replace(/[a-zA-Z]/g, () => letters.pop());
};
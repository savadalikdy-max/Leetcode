/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rv=0;
       while (x !== 0) {

        let digit = x % 10;

        rv = rv * 10 + digit;

        x = Math.trunc(x / 10);
    }
    if(rv < -2147483648 || rv >2147483648){
        return 0;
    }
    return rv
};
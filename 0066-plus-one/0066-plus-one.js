/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(dgt) {
    
    for(let i = dgt.length - 1; i >= 0; i--) {

        if(dgt[i] < 9) {
            dgt[i]++;
            return dgt;
        }

        dgt[i] = 0;
    }

    dgt.unshift(1);
    return dgt;
};


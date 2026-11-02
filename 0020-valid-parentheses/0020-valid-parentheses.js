/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
let ans = [];
for(let i = 0; i < s.length; i++) { 

    if(s[i] === "(" || s[i] === "{" || s[i] === "[") { 
        ans.push(s[i]); 
    } 
    else { 
        let lst = ans.pop();

        if(
            (s[i] === ')' && lst !== '(') || 
            (s[i] === '}' && lst !== '{') || 
            (s[i] === ']' && lst !== '[')
        ) { 
            return false; 
        }
    } 
}

return ans.length === 0; 


};

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];

    for (let char of words[0]) {
        let count = 0;

        for (let word of words) {
            let index = word.indexOf(char);

            if (index !== -1) {
                count++;
                word = word.slice(0, index) + word.slice(index + 1);
            }
        }

        if (count === words.length) {
            result.push(char);

            for (let i = 1; i < words.length; i++) {
                let index = words[i].indexOf(char);

                if (index !== -1) {
                    words[i] = words[i].slice(0, index) + words[i].slice(index + 1);
                }
            }
        }
    }

    return result;
};
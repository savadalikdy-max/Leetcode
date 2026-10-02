/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
      let obj = {};

    let all = [...arr1, ...arr2];

    all.forEach((item) => {

        let id = item.id;

        obj[id] = {
            ...obj[id],
            ...item
        };

    });

    return Object.values(obj).sort((a, b) => a.id - b.id);
};
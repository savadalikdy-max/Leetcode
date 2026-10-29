/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
      let rslt = [];

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !rslt.includes(nums1[i])) {
            rslt.push(nums1[i]);
        }
    }

    return rslt;
};

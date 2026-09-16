class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // // Brute Force
        let i = 0;
        let j = 0;
        let res = [];

        while(i < nums1.length && j < nums2.length){
            if(nums1[i] < nums2[j]){
                res.push(nums1[i++])
            } else {
                res.push(nums2[j++])
            }
        }
        while(i < nums1.length){
            res.push(nums1[i++]);
        }
        while(j < nums2.length){
            res.push(nums2[j++])
        }

        const length = res.length;
        if(length % 2 == 1){
            return res[Math.floor(length/2)]
        } else {
            let midR = Math.floor(length/2);
            let midL = midR - 1;
            return (res[midR] + res[midL])/2;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // Brute Force
        const res = [...nums1, ...nums2];
        const len = res.length;
        const isOdd = len % 2 !== 0;
        res.sort((a,b) => a-b)

        console.log(res);

        console.log(isOdd)
        if(!isOdd){
            let left = Math.floor(len/2) - 1;
            let right = left+1;
            return ( (res[left] + res[right])/2 )
        } else {
            return res[ Math.floor(len/2)]
        }
    }
}

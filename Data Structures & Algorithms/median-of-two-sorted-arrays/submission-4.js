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
        let totalRequired = nums1.length + nums2.length
        let indL = Math.floor(totalRequired/2) - 1;
        let indR = indL + 1;
        let counter = -1;

        while(i < nums1.length && j < nums2.length){
            ++counter;
            if(nums1[i] < nums2[j]){
                if(counter == indL || counter == indR) {
                    res.push(nums1[i]);
                }
                ++i;
            } else {
                if(counter == indL || counter == indR) {
                    res.push(nums2[j]);
                }
                ++j;
            }
        }
        while(i < nums1.length){
            ++counter;
            if(counter == indL || counter == indR) {
                    res.push(nums1[i]);
                }   
            ++i;
        }
        while(j < nums2.length){
            ++counter;
            if(counter == indL || counter == indR) {
                    res.push(nums2[j]);
                }
            ++j;
        }

        console.log(res)

        // const length = res.length;
        // if(length % 2 == 1){
        //     return res[Math.floor(length/2)]
        // } else {
        //     let midR = Math.floor(length/2);
        //     let midL = midR - 1;
        //     return (res[midR] + res[midL])/2;
        // }

        if(totalRequired % 2 == 1){
            return res.pop();
        } else {
            return (res[0] + res[1]) /2 
        }
    }
}

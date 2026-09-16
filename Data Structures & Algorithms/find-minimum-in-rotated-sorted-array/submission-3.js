class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // Brute Force
        // return nums.sort((a, b) => a - b)[0]

        // Better brute force O(n)
        // for(let i=0; i<nums.length-1; i++){
        //     if(nums[i] > nums[i+1]){
        //         return nums[i+1];
        //     }
        // }
        // return nums[0];

        let l = 0;
        let r = nums.length - 1;
        let res = nums[0];

        while( l <= r) {
            if(nums[l] < nums[r]) {
                res = Math.min(nums[l], res);
                break;
            }
            let m = l +  Math.floor((r-l)/2);
            res = Math.min(nums[m], res);
            if(nums[m] >= nums[l]){
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return res;


    }
}

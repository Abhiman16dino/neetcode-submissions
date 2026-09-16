class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // Brute Force
        // return nums.sort((a, b) => a - b)[0]

        for(let i=0; i<nums.length-1; i++){
            if(nums[i] > nums[i+1]){
                return nums[i+1];
            }
        }
        return nums[0];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length
        const dp = new Array(n).fill(1)

        for(let i = n-1; i >= 0; i--){
            for(let j = i+1; j < n; j++){
                if(nums[i] < nums[j]){
                    dp[i] = Math.max(dp[i], dp[j]+1)
                }
            }
        }

        return Math.max(...dp)
    }
}

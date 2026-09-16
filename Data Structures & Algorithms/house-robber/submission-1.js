class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = new Array(nums.length).fill(-1)

        function check(i){
            if(i >= nums.length){
                return 0
            }

            if(dp[i] !== -1) {
                return dp[i]
            }

            let opt1 = nums[i] + check(i+2)

            let opt2 = check(i+1)

            return dp[i] = Math.max(opt1, opt2)
        }

        return Math.max(check(0), check(1))
    }
}

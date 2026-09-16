class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        // if there is only one house we cannot
        // remove last or first house to remove circle dependency
        // so just return
        if(nums.length == 1){
            return nums[0]
        }

        // Helper is needed, for separating dp array
        function helper(nums){

            // Basic House Robber I logic
            const dp = new Array(nums.length).fill(-1)

            function travel(i){
                if(i >= nums.length){
                    return 0
                }

                if(dp[i] !== -1) {
                    return dp[i]
                }

                let opt1 = nums[i] + travel(i+2)

                let opt2 = travel(i+1)

                return dp[i] = Math.max(opt1, opt2)
            }

            return travel(0)
        }

        // To break the circle, we can only take one of first or last house

        // Recursion is called by excluding first house
        const excludeFirstHouse = helper(nums.slice(1))

        // Recursion is called by excluding second house
        const excludeLastHouse = helper(nums.slice(0, -1))

        // Max result returned
        return Math.max(excludeFirstHouse, excludeLastHouse)
    }
}

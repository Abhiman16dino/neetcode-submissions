class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const dp = new Array(cost.length).fill(-1)
        const dfs = (i) => {
            if(i >= cost.length){
                return 0;
            }
            if(dp[i] != -1){
                return dp[i]
            }
            return dp[i] = cost[i] + Math.min(dfs(i+1), dfs(i+2))
        }
        return  Math.min(dfs(0), dfs(1))
    }
}

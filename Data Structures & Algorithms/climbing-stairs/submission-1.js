class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        const dp = new Array(n+1).fill(-1)
        function dfs(i){
            if(i == 0){
                return 1
            }
            if(dp[i] != -1){
                return dp[i]
            }
            let one = 0, two = 0
            if(i-1 >= 0){
                one = dfs(i-1)
            }
            if(i-2 >= 0){
                two = dfs(i-2)
            }
            return dp[i] = one + two
        }
        return dfs(n)
    }
}

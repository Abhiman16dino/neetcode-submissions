class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({length: m}, () => new Array(n).fill(-1));

        dp[0][0] = 1;

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(i == 0 && j == 0){
                    continue;
                }
                let down = 0;
                let right = 0;

                if(i > 0){
                    down = dp[i - 1][j]
                }
                if(j > 0){
                    right = dp[i][j-1]
                }
                dp[i][j] = down + right;
            }
        }
        return dp[m-1][n-1]
    }
}

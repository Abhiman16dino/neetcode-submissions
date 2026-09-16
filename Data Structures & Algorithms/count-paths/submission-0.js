class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({length: m}, () => new Array(n).fill(-1));

        function travel(m, n){
            if(m == 0 && n == 0) {
                return 1;
            }
            if( m < 0 || n < 0){
                return 0;
            }
            if(dp[m][n] != -1) {
                return dp[m][n]
            }
            
            const up = travel(m-1, n);
            const left = travel(m, n-1);
            
            return dp[m][n] = up + left;
        }

        return travel(m-1, n-1);
    }
}

class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        const dp = new Array(amount + 1).fill(Infinity)
        dp[0] = 0
        // dp[i] => coins to sum up i

        for(const coin of coins) {
            for(let i = coin; i <= amount; i++ ){
                dp[i] = Math.min( dp[i], dp[i - coin] + 1)
            }
        }

        return dp[amount] !== Infinity ? dp[amount] : -1
    }
}

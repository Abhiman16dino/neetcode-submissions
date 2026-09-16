class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const n = coins.length;

        const dp = Array.from({length: n}, () => new Array(amount+1).fill(-1));

        function recur(ind, T){
            if(ind == n){
                if(T == 0){
                    return 1;
                }
                return 0;
            }

            if(dp[ind][T] !== -1){
                return dp[ind][T];
            }

            let pick = 0;
            if(coins[ind] <= T) {
                pick = recur(ind, T - coins[ind]);
            }
            const not_pick = recur(ind+1, T);

            return dp[ind][T] = pick + not_pick;
        }

        const res = recur(0, amount);
        return res;
    }
}

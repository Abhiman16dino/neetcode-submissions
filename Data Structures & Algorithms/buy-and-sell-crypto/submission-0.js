class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = i + 1;
        let max_profit = 0;
        while (j < prices.length) {
            // Is Profitable
            if (prices[i] < prices[j]) {
                let profit = prices[j] - prices[i];
                max_profit = Math.max(max_profit, profit);
            } else {
                i = j;
            }
            j++;
        }
        return max_profit;
    }
}
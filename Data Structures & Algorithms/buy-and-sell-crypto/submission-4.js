class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let maxProfit = 0;
        for( const sell of prices){
            maxProfit = Math.max(maxProfit, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
        }

        return maxProfit;
    }
}

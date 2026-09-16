class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        prices[src] = 0

        for(let i = 0; i < k+1; i++){
            const temp_prices = [...prices];
            for(const [s, d, p] of flights){
                if(prices[s] + p < temp_prices[d]){
                    temp_prices[d] = prices[s] + p
                }
            }
            prices = temp_prices
        }

        return prices[dst] == Number.MAX_SAFE_INTEGER ? -1 : prices[dst]
    }
}

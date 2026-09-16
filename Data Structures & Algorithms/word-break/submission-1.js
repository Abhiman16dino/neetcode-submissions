class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {

        const dp = new Array(s.length).fill(undefined)

        function dfs(i) {
            if(i == s.length){
                return true
            }

            if(dp[i] !== undefined) {
                return dp[i]
            }

            for(const word of wordDict) {
                const len = word.length
                if(s.substring(i, i+len) == word){
                    if(dp[i] = dfs(i+len)){
                        return true
                    }
                }
            }
            return dp[i] = false
        }

        return dfs(0)
    }
}

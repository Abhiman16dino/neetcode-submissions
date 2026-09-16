class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = new Array(s.length).fill(-1);

        function dfs(i){
            if (i === s.length) return 1; 
            if (i > s.length) return 0; 

            if(dp[i] !== -1){
                return dp[i]
            }
            if(s[i] == '0'){
                return 0
            }

            let res = dfs(i+1)
            if((i+1) < s.length && (s[i] == '1' || (s[i] == '2' && "0123456".includes(s[i+1])) ) ){
                res += dfs(i+2)
            }
            return dp[i] = res
        }

        return dfs(0)
    }
}

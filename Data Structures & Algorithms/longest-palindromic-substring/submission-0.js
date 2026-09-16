class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length
        let resLen = 0
        let res = ""

        for(let i = 0; i < n; i++){
            let l = i, r = i
            while(l >= 0 && r < n && s[l] == s[r]){
                if((r-l+1) > resLen){
                    resLen = r-l+1
                    res = s.substring(l, r+1)
                }
                --l
                ++r
            }
            l = i, r = i+1
            while(l >= 0 && r < n && s[l] == s[r]){
                if((r-l+1) > resLen){
                    resLen = r-l+1
                    res = s.substring(l, r+1)
                }
                --l
                ++r
            }
        }
        return res;
    }
}

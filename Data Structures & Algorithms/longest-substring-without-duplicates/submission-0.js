class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0
        let seen = new Set();
        let max = 0;
        for(let j=0; j<s.length; j++){
            while(seen.has(s[j])){
                seen.delete(s[i])
                ++i;
            }
            seen.add(s[j]);
            max = Math.max(max, j-i+1);
        }
        return max;
    }
}
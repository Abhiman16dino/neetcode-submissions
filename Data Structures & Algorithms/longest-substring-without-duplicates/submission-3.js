class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const len = s.length;
        const seen = new Set();
        let res = 0;
        let l = 0;

        for(let r=0; r < len; r++){
            while(seen.has(s[r])){
                seen.delete(s[l]);
                ++l;
            }
            seen.add(s[r]);
            res = Math.max(res, r - l + 1);
        } 
        return res;
    }
}

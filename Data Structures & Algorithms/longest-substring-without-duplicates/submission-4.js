class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let r = 0
        let max = 0
        const set = new Set();
        while(r < s.length){
            if(!set.has(s[r])){
                set.add(s[r])
                const len = r - l + 1
                max = Math.max(max, len)
                ++r;
            } else {
                set.delete(s[l])
                ++l
            }
        }
        return max;
    }
}

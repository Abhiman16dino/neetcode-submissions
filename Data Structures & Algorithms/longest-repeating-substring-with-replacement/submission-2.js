class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        const map = new Map();
        let maxF = 0;
        let res = 0;
        for(let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            maxF = Math.max(maxF, map.get(s[r]))

            while(r - l + 1 - maxF > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }

            res = Math.max(res, r - l + 1)
        }
        return res;
    }
}

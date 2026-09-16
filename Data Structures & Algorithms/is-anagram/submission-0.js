class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = s.split("").sort();
        t = t.split("").sort();
        return JSON.stringify(s) == JSON.stringify(t);
    }
}

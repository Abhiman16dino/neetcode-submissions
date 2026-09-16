class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(const word of strs){
            const count = new Array(26).fill(0);
            for(const ch of word){
                count[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(',');
            if(!res[key]){
                res[key] = [];
            }
            res[key].push(word);
        }
        return Object.values(res);
    }
}

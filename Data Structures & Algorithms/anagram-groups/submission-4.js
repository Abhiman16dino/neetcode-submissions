class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map()
        for(const str of strs){
            let key = new Array(26).fill(0);
            for(const c of str) {
                key[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            key = key.join(',')
            if(res.has(key)) {
                res.get(key).push(str)
            } else {
                res.set(key, [str])
            }
        }

        return Array.from(res.values())
    }
}

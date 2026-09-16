class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const res = {}

        for(const str of strs){
            let key = new Array(26).fill(0)
            for(const ch of str){
                const index = ch.charCodeAt(0) - 'a'.charCodeAt(0)
                key[index] += 1
            }
            key = key.toString();
            if(!res[key]){
                res[key] = []
            }
            res[key].push(str)
        }

        return Object.values(res)
    }
}

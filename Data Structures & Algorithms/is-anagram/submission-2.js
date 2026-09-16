class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        const hashS = {}
        const hashT = {}

        for(let i = 0; i < s.length; i++){
            hashS[s[i]] = (hashS[s[i]] || 0) + 1
            hashT[t[i]] = (hashT[t[i]] || 0) + 1
        }

        for(const key in hashS){
            if(hashS[key] !== hashT[key]){
                return false
            }
        }

        return true

    }
}

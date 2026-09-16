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

        const hash_s = new Map()
        const hash_t = new Map()

        for(const i of s){ 
            if(hash_s.has(i)){
                hash_s.set(i, hash_s.get(i)+1)
            } else {
                hash_s.set(i, 1)
            }
        }

        for(const i of t){ 
            if(hash_t.has(i)){
                hash_t.set(i, hash_t.get(i)+1)
            } else {
                hash_t.set(i, 1)
            }
        }

        console.log(hash_s)
        console.log(hash_t)

        for(const key of hash_s.keys()){
            if(hash_s.get(key) !== hash_t.get(key)){
                return false;
            }
        }

        return true
    }
}

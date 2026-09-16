class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
            if(s.length !== t.length){
        return false;
    }

    const countS = {}
    const countT = {}

    for(const c of s){
        countS[c] = countS[c] ? countS[c] + 1 : 1;
    }

    for(const c of t) {
        countT[c] = countT[c] ? countT[c] + 1 : 1;
    }

    console.log(countS)
    console.log(countT)

    for( const key in countS){
        if(countS[key] !== countT[key]){
            return false;
        }
    }

    return true;
    }
}

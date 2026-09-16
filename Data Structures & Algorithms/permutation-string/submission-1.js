class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freqS2 = {};
        let freqS1 = {};
        if(s1.length > s2.length){
            return false;
        }
        for(let i=0; i<s1.length; i++){
            freqS1[s1[i]] = (freqS1[s1[i]] || 0) + 1;
        }

        console.log(freqS1);

        for(let l=0; l<=s2.length-1; l++){
            let r = l + s1.length-1;
            for(let i = l; i <= r; i++){
                freqS2[s2[i]] = (freqS2[s2[i]] || 0) + 1;
            }
            console.log(freqS1);
            console.log(freqS2);

            let same = true;
            for(let key in freqS1){
                if(freqS1[key] != freqS2[key]){
                    same = false;
                    break;
                }
            }
            if(same) {
                return true;
            }
            freqS2 = {};
        }
        return false;
    }
}

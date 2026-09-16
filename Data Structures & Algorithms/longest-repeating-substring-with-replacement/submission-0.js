class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;
        const freq = {};
        let maxFreq = 0;
        let l = 0;
        let res = 0;

        for (let r=0; r<n; ++r){
            // Increment the frequency of current
            freq[s[r]] = (freq[s[r]] || 0) + 1;

            // Check the max frequency, in swap
            maxFreq = Math.max(maxFreq, freq[s[r]]);

            if(r-l+1 - maxFreq > k){
                freq[s[l]]--;
                l++;
            }
            res = Math.max(res, r-l+1);
        }
        return res;
    }
}

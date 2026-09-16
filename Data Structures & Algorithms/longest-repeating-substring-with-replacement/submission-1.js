class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {}
        let left = 0
        let maxCount = 0;
        let maxLen = 0;

        for(let right = 0; right < s.length; right++){
            let char = s[right]
            count[char] = (count[char] || 0) + 1;

            maxCount = Math.max(maxCount, count[char]);

            while((right-left + 1) - maxCount > k){
                count[s[left]]--;
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}

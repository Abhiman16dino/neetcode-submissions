class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const s = new Set(nums)
        let result = 0;
        for(let num of s) {
            if(s.has(num-1)){
                continue;
            }
            let length = 1
            while(s.has(++num)){
                length++
            }
            result = Math.max(result, length)
        }

        return result
    }
}

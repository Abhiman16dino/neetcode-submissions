class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {

        let res = Math.max(...nums)
        let cMax = 1, cMin = 1

        for(const n of nums){
            const tMax = cMax
            cMax = Math.max(n*cMax, n*cMin, n)
            cMin = Math.min(n*cMin, n*tMax, n)
            res = Math.max(res, cMax)
        }

        return res
    }
}

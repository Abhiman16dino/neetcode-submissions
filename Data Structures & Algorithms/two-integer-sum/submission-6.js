class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()

        for(let i = 0; i < nums.length; i++) {
            const req = target - nums[i]
            if(seen.has(req)){
                return [seen.get(req), i]
            }
            seen.set(nums[i], i)
        }
    }
}

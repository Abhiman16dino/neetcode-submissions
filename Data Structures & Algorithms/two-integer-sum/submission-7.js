class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const need = new Map()
        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const req = target - num
            if(need.has(req)){
                return [need.get(req), i]
            }
            need.set(num, i)
        }
        return []
    }
}

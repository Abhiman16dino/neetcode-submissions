class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const distinct = new Set(nums);
        return distinct.size != nums.length
    }
}

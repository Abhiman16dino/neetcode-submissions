class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length-1
        let ans = nums[0]

        while(l <= r){
            if(nums[l] <= nums[r]){
                ans = Math.min(ans, nums[l])
            }
            const mid = Math.floor((r+l)/2)
            ans = Math.min(ans, nums[mid])

            if(nums[mid] >= nums[l]){
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return ans
    }
}

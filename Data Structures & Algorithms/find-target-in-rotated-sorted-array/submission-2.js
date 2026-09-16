class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while(left <= right){
            const mid = Math.floor((right+left)/2)
            if(nums[mid] == target){
                return mid
            }
            // Left half is sorted
            else if (nums[mid] >= nums[left]){
                // target belongs to sorted portion
                if(target >= nums[left] && target < nums[mid]){
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
            // Right half is sorted
            else {
                //target belongs to sorted area
                if(target > nums[mid] && target <= nums[right]){
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
        }
        return -1
    }
}

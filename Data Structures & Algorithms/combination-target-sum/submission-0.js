class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        const ans = []
        const n = nums.length

        function backtrack(index, sum, path) {
            if(sum == target){
                ans.push([...path])
                return
            }
            if(sum > target){
                return
            }
            for(let i = index; i < n; i++){
                path.push(nums[i])
                backtrack(i, sum+nums[i],  path)
                path.pop()
            }
        }

        backtrack(0, 0, [])
        return ans
    }
}

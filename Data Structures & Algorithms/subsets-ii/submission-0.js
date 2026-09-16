class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)
        const ans = []
        const n = nums.length
        
        function backtrack(start, path) {
            ans.push([...path])

            for(let i = start; i < n; i++){
                if( i > start && nums[i] == nums[i-1]) continue;
                path.push(nums[i])
                backtrack(i+1, path)
                path.pop()
            }
        }

        backtrack(0, [])
        return ans
    }
}

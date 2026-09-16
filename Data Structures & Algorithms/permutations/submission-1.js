class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length;
        const ans = []
        function solve(path, used){
            for(let i = 0; i < n; i++){
                if (path.length === n) {
                    ans.push([...path]);
                    return;
                }
                if(used[i]) continue;
                used[i] = true
                path.push(nums[i])
                solve(path, used)
                path.pop()
                used[i] = false
            }
        }
        solve([], {})
        return ans
    }
}

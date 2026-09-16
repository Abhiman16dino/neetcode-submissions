class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length;
        const ans = []
        function solve(index, path, visited){
            for(let num of nums){
                if(index == n){
                    ans.push([...path])
                    return
                }
                if(!visited[num]){
                    path.push(num)
                    visited[num] = true
                    solve(index+1, path, visited)
                    path.pop()
                    visited[num] = false
                }
            }
        }
        solve(0, [], {})
        return ans
    }
}

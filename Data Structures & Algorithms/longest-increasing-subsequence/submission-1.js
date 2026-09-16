class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        let max = -Infinity
        function dfs(path ,index){
            
            max = Math.max(max, path.length)

            for(let i = index; i < nums.length; i++){
                if(path.length == 0 || path[path.length - 1] < nums[i]){
                    path.push(nums[i])
                    dfs(path, i+1)
                    path.pop()
                }
                
            }
        }
        dfs([],0)
        return max
    }
}

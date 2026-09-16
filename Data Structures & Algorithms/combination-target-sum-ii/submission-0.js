class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a - b)
        const n = candidates.length;
        const ans = []

        function solve(index, path, sum) {
            if(sum == target){
                ans.push([...path])
                return
            }
            for(let i = index; i < n; i++) {
                if(sum > target) {
                    return
                }
                if(i > index && candidates[i-1] == candidates[i]){
                    continue;
                }
                path.push(candidates[i])
                solve(i+1, path, sum + candidates[i])
                path.pop()
            }
        }

        solve(0, [], 0)
        return ans
    }
}

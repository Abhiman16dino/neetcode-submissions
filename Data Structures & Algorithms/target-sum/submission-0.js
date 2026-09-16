class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const n = nums.length;
        const dp = new Map();

        function recur(ind, T){
            if(ind == n){
                if(T == target){
                    return 1;
                }
                return 0;
            }
            const key = `${ind},${T}`
            if(dp.has(key)){
                return dp.get(key);
            }

            const op1 = recur(ind+1, T-nums[ind]);
            const op2 = recur(ind+1, T+nums[ind]);

            dp.set(key, op1 + op2)

            return op1+op2;
        }

        return recur(0, 0)
        }
}

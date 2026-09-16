class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = []
        const right = []
        const n = nums.length

        left[0] = 1;
        for(let i = 1; i < n; i++){
            left[i] = nums[i-1] * left[i-1];
        }

        right[n - 1] = 1;
        for(let i = n - 2; i >= 0; i--){
            right[i] = nums[i+1] * right[i+1]
        }

        const ans = []
        for(let i = 0; i < n; i++){
            ans[i] = left[i] * right[i]
        }

        return ans;
    }
}

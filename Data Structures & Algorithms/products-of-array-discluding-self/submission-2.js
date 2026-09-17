class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = new Array(nums.length)
        const right = new Array(nums.length)

        left[0] = 1
        right[nums.length - 1] = 1

        for(let i = 1; i < nums.length; i++){
            left[i] = left[i-1] * nums[i-1]
        }

        for(let i = nums.length-2; i >= 0; i--){
            right[i] = right[i+1]* nums[i+1]
        }

        const res = []
        for(let i = 0; i < nums.length; i++){
            res.push(left[i] * right[i])
        }

        console.log(left)
        console.log(right)

        return res;
    }
}

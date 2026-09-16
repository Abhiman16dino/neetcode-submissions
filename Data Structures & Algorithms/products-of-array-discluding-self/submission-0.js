class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const left_product = new Array(n);
        const right_product = new Array(n);
        const res = new Array(n);

        left_product[0] = 1;
        right_product[n-1] = 1;

        for( let i=1; i<nums.length; i++ ) {
            left_product[i] = left_product[i-1] * nums[i-1];
        }

        for( let i=n-2; i>=0; i-- ) {
            right_product[i] = right_product[i+1] * nums[i+1];
        }

        for( let i=0; i<nums.length; i++ ) {
            res[i] = left_product[i] * right_product[i];
        }

        return res
    }
}

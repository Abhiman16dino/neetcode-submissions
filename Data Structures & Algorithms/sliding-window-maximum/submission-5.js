class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const output = []
        const dq = []
        let r = 0

        while( r < nums.length ){
            while(dq.length > 0 && nums[dq[dq.length - 1]] < nums[r]){
                dq.pop()
            }
            dq.push(r)

            if(dq[0] <= r - k){
                dq.shift()
            }

            if(r >= k - 1){
                output.push(nums[dq[0]])
            }
            ++r;
        }

        return output
    }
}

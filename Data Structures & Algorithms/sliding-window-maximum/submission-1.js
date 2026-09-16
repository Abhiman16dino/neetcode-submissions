class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let lastIndex = nums.length - 1;
        let left = 0;
        let right = k -1;
        const res = [];

        while(right <= lastIndex){
            // find the max and push;
            const window = nums.slice(left, right+1);
            window.sort((a,b) => Number(b) - Number(a));
            res.push(window[0]);
            ++right;
            ++left;
        }
        return res;
    }
}

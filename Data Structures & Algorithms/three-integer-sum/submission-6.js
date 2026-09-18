class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if(nums.length < 3){
            return []
        }
        const N = nums.length;
        nums.sort((a, b) => a - b);
        const results = [];

        for(let i = 0; i < N - 2; i++) {
            if(i > 0) {
                if(nums[i] == nums[i-1]){
                    continue;
                }
            }

            let l = i+1;
            let r = N - 1;

            while(l < r){
                const sum = nums[i] + nums[l] + nums[r];
                if(sum == 0) {
                    results.push([nums[i], nums[l], nums[r]])
                    l++;
                    r--;
                    while((l < r) && (nums[l-1] == nums[l])) l++;
                    while((l < r) && (nums[r+1] == nums[r])) r--;
                }
                else if ( sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }

        return results;
    }
}

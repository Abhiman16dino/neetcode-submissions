class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const n = nums.length
        const res = []
        
        function subQ(i = 0, list = []){
            if ( i >= n ) {
                res.push([...list])
                return
            }

            // Pick and Continue
            list.push(nums[i])
            subQ( i + 1, list)

            // Not Pick and Continue
            list.pop()
            subQ( i + 1, list)
        }

        subQ()
        return res
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = (r - l) * Math.min(heights[l], heights[r]);
        console.log(max);

        while(l < r){
            const capacity = (r - l) * Math.min(heights[l], heights[r]);
            max = Math.max(max, capacity);
            if(heights[l] < heights[r]){
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}

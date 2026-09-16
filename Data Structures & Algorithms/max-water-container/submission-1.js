class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let left = 0;
        let right = heights.length - 1
        while(left < right){
            const water = Math.min(heights[left], heights[right]) * (right - left);
            max = Math.max(water, max);
            if(heights[left] <= heights[right]){
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}

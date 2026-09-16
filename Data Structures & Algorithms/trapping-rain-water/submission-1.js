class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;

        // edge case
        if(n <= 2){
            return 0;
        }
        let maxL = height[0];
        let maxR = height[n-1];

        let left = 1;
        let right = n-2;

        let water = 0;

        while(left <= right){
            if(maxL < maxR){ // take min -> take left as water level
                if(maxL <= height[left]){
                    maxL = height[left]
                } else {
                    water += maxL - height[left]
                }
                ++left
            } else { //take min -> take right as water level
                if(maxR <= height[right]){
                    maxR = height[right]
                } else {
                    water += maxR - height[right]
                }
                --right;
            }
        }
        return water
    }
}

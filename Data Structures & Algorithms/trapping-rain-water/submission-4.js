class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        if(n < 2){
            return 0;
        }
        let leftMax = height[0];
        let rightMax = height[n - 1];

        let left = 1;
        let right = n - 2;
        let total = 0;

        while(left <= right){
            if(leftMax <= rightMax){
                if(height[left] > leftMax){
                    leftMax = height[left]
                } else {
                    total += leftMax - height[left]
                }
                ++left;
            } else {
                if(height[right] > rightMax){
                    rightMax = height[right];
                } else {
                    total += rightMax - height[right]
                }
                --right;
            }
        }
        return total;
    }
}

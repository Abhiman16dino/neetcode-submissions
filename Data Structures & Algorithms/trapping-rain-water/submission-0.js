class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length == 0) return 0;

        let l = 0;
        let r = height.length - 1;

        let leftMax = height[l];
        let rightMax = height[r];
        let res = 0;

        while(l<r){
            if(leftMax < rightMax){
                l++;
                res += Math.max(leftMax, height[l]) - height[l]
                leftMax = Math.max(leftMax, height[l])
                // l++;
            } else {
                r--;
                res += Math.max(rightMax, height[r]) - height[r]
                rightMax = Math.max(rightMax, height[r])
                // r--;
            }
        }
        return res;
    }
}

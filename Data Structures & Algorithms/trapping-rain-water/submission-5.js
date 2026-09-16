class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const N = height.length

        let leftMax = height[0]
        let rightMax = height[N-1]

        let left = 1
        let right = N-2

        let total = 0

        while(left <= right){
            if(leftMax < rightMax){
                if(height[left] > leftMax){
                    leftMax = height[left]
                } else {
                    total += leftMax - height[left]
                }
                ++left
            } else {
                if(height[right] > rightMax){
                    rightMax = height[right]
                } else {
                    total += rightMax - height[right]
                }
                --right
            }
        }

        return total

    }
}

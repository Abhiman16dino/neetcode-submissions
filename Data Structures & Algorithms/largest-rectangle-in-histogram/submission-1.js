class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0
        const stack = [] // [index, height] 
        const n = heights.length

        for(let i = 0; i < n; i++){
            let start = i
            while(stack.length > 0 && heights[i] < stack[stack.length - 1][1]){
                const [index, height] = stack.pop()
                maxArea = Math.max(maxArea, height * (i - index))
                start = index;
            }
            stack.push([start, heights[i]])
        }

        while(stack.length > 0){
            const [index, height] = stack.pop()
            maxArea = Math.max(maxArea, height * (n - index))
        }

        return maxArea;
    }
}

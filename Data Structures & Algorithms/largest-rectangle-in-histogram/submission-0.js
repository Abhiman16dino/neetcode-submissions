class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; // This will hold the pair [index, heigh]
        let maxArea = 0;

        for(let i=0; i< heights.length; i++){
            let cHeight = heights[i];
            let start = i;
            while(stack.length > 0 && stack[stack.length - 1][1] > cHeight){
                const poped = stack.pop();
                maxArea = Math.max(maxArea, poped[1] * (i - poped[0]));
                start = poped[0];
            }
            stack.push([start, cHeight]);
        }

        for(let items of stack){
            let [index, height] = items;
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }
        return maxArea;
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        console.log(heights)
        let i=0
        let j = heights.length - 1;
        let area = 0;
        while(i<j){
            let tempArea = 0;
            if(heights[i] < heights[j]){
                tempArea = heights[i] * (j-i)
                i++;
            } else {
                tempArea = heights[j] * (j-i)
                j--;
            }
            if(tempArea > area){
                area = tempArea;
            }

        }
        return area;
    }
}

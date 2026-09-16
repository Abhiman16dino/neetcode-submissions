class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const ROWS = matrix.length
        const COLS = matrix[0].length
        const TOTAL = (ROWS*COLS)

        let left = 0
        let right = TOTAL - 1

        while(left <= right){
            const mid = Math.floor((right-left)/2) + left
            const r = Math.floor(mid/COLS) 
            const c = mid % COLS
            if(matrix[r][c] == target){
                return true
            } else if (target > matrix[r][c]){
                left = mid+1
            } else {
                right = mid-1
            }
        }

        return false
    }
}

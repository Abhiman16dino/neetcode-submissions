class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const row = matrix.length;
        const col = matrix[0].length;

        let l = 0;
        let r = row*col -1;

        while(l<=r){
            const m = l + Math.floor((r-l)/2);
            const cRow = Math.floor(m/col);
            const cCol = m%col;
            if(matrix[cRow][cCol] < target){
                l = m + 1;
            } else if (matrix[cRow][cCol] > target) {
                r = m - 1;
            }
            else {
                return true;
            }
        }
        return false;
    }
}

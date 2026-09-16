class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let left = 0;
        let rows = matrix.length;
        let cols = matrix[0].length;
        let right = rows * cols - 1;

        while(left <= right){
            let mid = left + Math.floor((right - left)/2);
            let cRow = Math.floor(mid / cols);
            let cCol = mid % cols;
            if(matrix[cRow][cCol] == target){
                return true;
            } else if (target > matrix[cRow][cCol]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        }
        return false;
    }
}

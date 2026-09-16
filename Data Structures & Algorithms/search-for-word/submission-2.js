class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let ROWS = board.length
        let COLS = board[0].length
        const path = new Set() // row,col

        function backtrack(row, col, i){
            if(i == word.length){
                return true
            }
            if(
                row < 0 || col < 0 ||
                row >= ROWS || col >= COLS ||
                word[i] != board[row][col] || path.has(`${row},${col}`)
            ) {
                return false
            }
            path.add(`${row},${col}`)
            const res = backtrack(row+1,col, i+1) || backtrack(row,col+1, i+1) ||
                        backtrack(row-1,col, i+1) || backtrack(row,col-1, i+1)
            path.delete(`${row},${col}`)
            return res; 
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if (backtrack(r, c, 0)) return true;
            }
        }

        return false
    }
}

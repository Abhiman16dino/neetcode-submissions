class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length
        const COLS = board[0].length
        const direction = [[-1,0], [1,0], [0,-1], [0,1]]

        const boundry_o = []
        for(let i = 0; i < COLS; i++){
            if(board[0][i] == 'O'){
                boundry_o.push([0,i])
            }
            if(board[ROWS-1][i] == "O"){
                boundry_o.push([ROWS-1, i])
            }
        }
        for(let i = 0; i < ROWS; i++){
            if(board[i][0] == 'O'){
                boundry_o.push([i,0])
            }
            if(board[i][COLS-1] == "O"){
                boundry_o.push([i, COLS-1])
            }
        }
        

        const dfs = (r, c) => {
            board[r][c] = "T"
            for(const[dr, dc] of direction){
                const nr = r + dr
                const nc = c + dc
                if(nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && board[nr][nc] == "O"){
                    dfs(nr, nc)
                }
            }
        }

        for(const [r, c] of boundry_o){
            dfs(r, c)
        }

        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                if(board[i][j] == 'O'){
                    board[i][j] = 'X'
                } else if (board[i][j] == 'T'){
                    board[i][j] = 'O'
                }
            }
        }
        return board
    }
}

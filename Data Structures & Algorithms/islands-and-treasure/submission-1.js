class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        const ROWS = grid.length
        const COLS = grid[0].length
        const q = []
        const dir = [[0,1], [0, -1], [1, 0], [-1, 0]]
        const land  = 2147483647

        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                if(grid[i][j] == 0){
                    q.push([i, j])
                }
            }
        }

        while(q.length > 0){
            
            const size = q.length
            for(let i = 0 ; i < size; i++){
                const[r, c] = q.shift()
                for(const[dr, dc] of dir){
                    const nr = r + dr
                    const nc = c + dc
                    if(nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && grid[nr][nc] == land){
                        grid[nr][nc] = grid[r][c] + 1
                        q.push([nr, nc])
                    }
                }
            }
        }
    }
}

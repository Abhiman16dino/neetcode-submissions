class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const directions = [[-1,0],[1,0],[0,-1],[0,1]]
        const ROWS = grid.length
        const COLS = grid[0].length

        const q = []

        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                if(grid[i][j] == 0){
                    q.push([i,j])
                }
            }
        }

        while(q.length > 0){
            const len = q.length
            for(let i = 0; i < len; i++){
                let [r, c] = q.shift()
                for(const [dr, dc] of directions){
                    const nr = r + dr
                    const nc = c + dc
                    if(nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && grid[nr][nc] == INF){
                        grid[nr][nc] = grid[r][c] + 1
                        q.push([nr, nc])
                    }
                }
            }
        }
         return grid
    }
}

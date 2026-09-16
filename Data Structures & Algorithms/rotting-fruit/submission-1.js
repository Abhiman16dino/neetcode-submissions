class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const directions = [[-1,0], [0,-1], [1,0], [0,1]]
        const q = []
        const R = grid.length
        const C = grid[0].length

        let fresh = 0
        let minutes = -1

        for(let i = 0; i < R; i++){
            for(let j = 0; j < C; j++){
                if(grid[i][j] == 2){
                    q.push([i,j])
                } else if (grid[i][j] == 1) {
                    ++fresh
                }
            }
        }

        if(fresh == 0 && q.length == 0){
            return 0
        }

        while(q.length > 0){
            const len = q.length
            ++minutes
            for(let i = 0; i < len; i++){
                const [r, c] = q.shift()
                for(const [dr, dc] of directions){
                    const nr = r + dr
                    const nc = c + dc
                    if(nr >= 0 && nc >= 0 && nr < R && nc < C && grid[nr][nc] == 1){
                        --fresh
                        grid[nr][nc] = 2
                        q.push([nr, nc])
                    }
                }

            }
        }

        if(fresh != 0){
            return -1
        } else {
            return minutes
        }
    }
}

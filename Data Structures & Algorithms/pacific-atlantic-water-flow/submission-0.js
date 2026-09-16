class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length
        const COLS = heights[0].length

        let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const direction = [[-1,0], [1,0], [0,-1], [0,1]]

        function dfs(r, c, ocean){
            ocean[r][c] = true
            for(let [dr, dc] of direction){
                let nr = r + dr
                let nc = c + dc

                if(nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]){
                    dfs(nr,nc, ocean)
                }
            }
        }

        // Pacific top
        for(let i = 0; i < COLS; i++){
            dfs(0,i, pac)
        }

        // Pacific left
        for(let i = 0; i < ROWS; i++){
            dfs(i,0, pac)
        }

        // atl bottom
        for(let i = 0; i < COLS; i++){
            dfs(ROWS-1,i, atl)
        }

        // atl right
        for(let i = 0; i < ROWS; i++){
            dfs(i,COLS-1, atl)
        }

        const ans = []
        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                if(atl[i][j] && pac[i][j]){
                    ans.push([i,j])
                }
            }
        }

        return ans
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    maxAreaOfIsland(grid) {
        const row = grid.length;
        const col = grid[0].length;
        let globalMax = 0;

        const visited = Array.from({length: row}, () => new Array(col).fill(0));
        const direction = [[1,0], [-1, 0], [0, 1], [0, -1]];

        function dfs(r, c){
            visited[r][c] = 1;
            let max = 1;

            for(const[dr, dc] of direction){
                const nr = r + dr;
                const nc = c + dc;
                if(nr >= 0 && nc >= 0 && nr < row && nc < col && visited[nr][nc] == 0 && grid[nr][nc] == 1){
                    max += dfs(nr, nc, max);
                }
            }
            return max;
        }

        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; j++){
                if(visited[i][j] == 0 && grid[i][j] == 1){
                    const max = dfs(i, j);
                    globalMax = Math.max(globalMax, max);
                }
            }
        }
        return globalMax;
    }
}

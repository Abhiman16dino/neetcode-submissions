class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const row = grid.length;
        const col = grid[0].length;

        const visited = Array.from({length: row}, () => new Array(col).fill(0));
        const directions = [[1,0], [-1,0], [0,1], [0, -1]];
        let islands = 0;

        function dfs(i, j){
            visited[i][j] = 1;
            for(const [dr, dc] of directions){
                const nr = i + dr;
                const nc = j + dc;
                if(nr >= 0 && nc >= 0 && nr < row && nc < col && visited[nr][nc] == 0 && grid[nr][nc] == '1'){
                    dfs(nr, nc);
                }
            }

        }
        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; j++){
                if(visited[i][j] == 0 && grid[i][j] == '1'){
                    ++islands;
                    dfs(i,j)
                }
            }
        }

        return islands;
    }
}

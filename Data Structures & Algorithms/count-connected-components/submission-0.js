class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({length: n}, () => [])
        for(const [u, v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Array(n).fill(0)

        const dfs = (node) => {
            visited[node] = 1
            for(const n of adj[node]){
                if(visited[n] == 0){
                    dfs(n)
                }
            }
        }
        let connection = 0
        for(let i = 0; i < n; i++){
            if(visited[i] == 0){
                ++connection;
                dfs(i)
            }
        }

        return connection;
    }
}

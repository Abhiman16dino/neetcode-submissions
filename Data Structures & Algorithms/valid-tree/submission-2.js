class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        if(edges.length != n - 1){
            return false
        }

        const adj = Array.from({length : n}, () => []);

        for(const [u, v] of edges){
            adj[u].push(v)
            adj[v].push(u)
        }

        const q = [[0, -1]] // node parent
        const visited = new Array(n).fill(0);
        visited[0] = 1

        while(q.length > 0){
            const [node, parent] = q.shift()
            for(const nei of adj[node]){
                if(nei == parent) continue;
                if(visited[nei] == 1){
                    return false
                }
                visited[nei] = 1
                q.push([nei, node])
            }
        }

        for(let i = 0; i < visited.length; i++){
            if(visited[i] == 0){
                return false
            }
        }

        return true
    }
}

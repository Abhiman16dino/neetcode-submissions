class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {

        const N = edges.length
        const parent = new Array(N+1)
        for(let i = 0;  i < N; i++){
            parent[i] = i
        }
        const size = new Array(N+1).fill(1)

        const find = (n) => {
            if( n != parent[n]){
                parent[n] = find(parent[n])
            }
            return parent[n]
        }

        const union = (n1, n2) => {
            const p1 = find(n1)
            const p2 = find(n2)

            if(p1 == p2){
                return false
            }
            if(size[p1] > size[p2]){
                size[p1] += size[p2]
                parent[p2] = p1
            } else {
                size[p2] += size[p1]
                parent[p1] = p2
            }
            return true
        }

        for(const [n1, n2] of edges){
            if(!union(n1,n2)){
                return [n1,n2]
            }
        }
    }
}

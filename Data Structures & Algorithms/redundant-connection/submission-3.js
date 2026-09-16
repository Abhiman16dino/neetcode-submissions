class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {

        const n = edges.length

        const parent = new Array(n+1);
        const size = new Array(n+1).fill(1);

        for(let i = 0; i < n+1; i++){
            parent[i] = i;
        }

        function find(n){
            if(parent[n] !== n){
                parent[n] = find(parent[n])
            }
            return parent[n];
        }

        function union(n1, n2){
            const p1 = find(n1)
            const p2 = find(n2)

            if(p1 == p2){
                return false
            }

            if(size[p1] > size[p2]){
                size[p1] += size[p2]
                parent[n2] = p1
            } else {
                size[p2] += size[p1]
                parent[p1] = p2
            }
            return true
        }

        for(const [n1, n2] of edges){
            if(!union(n1, n2)){
                return [n1, n2]
            }
        }
    }
}

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({length: numCourses}, () => [])
        const ind = new Array(numCourses).fill(0)
        const q = []
        const ans = []

        for(const [dst, src] of prerequisites){
            adj[src].push(dst)
            ++ind[dst]
        }

        for(let i = 0; i < ind.length; i++){
            if(ind[i] == 0){
                q.push(i)
            }
        }

        while(q.length > 0){
            const node = q.shift()
            ans.push(node)
            for(const nei of adj[node]){
                ind[nei]--
                if(ind[nei] == 0){
                    q.push(nei)
                }
            }
        }

        return ans.length == numCourses ? ans : []
    }
}

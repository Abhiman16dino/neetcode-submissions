class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Topo Sort - Kahn Algorith

    // Step 1: Make Adj List
        const adj = Array.from({length: numCourses}, () => [])

        // Maintain a indegree array
        const ind = new Array(numCourses).fill(0)
        for(const[des, src] of prerequisites){
            adj[src].push(des)
            ++ind[des]
        }

    // Perform Kahn Algo, BFS
        const q = []
        const srt = []
        // Take all V with indegree 0
        for(let i = 0; i < ind.length; i++){
            if(ind[i] == 0){
                q.push(i)
            }
        }

        while(q.length > 0){
            const node = q.shift()
            srt.push(node)
            for(const nei of adj[node]){
                --ind[nei]
                if(ind[nei] == 0){
                    q.push(nei)
                }
            }
        }

        return srt.length == numCourses
    }
}

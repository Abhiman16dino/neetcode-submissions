class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const N = words.length
        const adj = {}
        const ind = {}

        // Step 1: initialize all unique chars
        for (const word of words) {
            for (const ch of word) {
                if (!(ch in adj)) adj[ch] = [];
                if (!(ch in ind)) ind[ch] = 0;
            }
        }

        // Build Graph
        for(let i = 0; i < N-1; i++){
            const s1 = words[i]
            const s2 = words[i+1]

            if(s1.length > s2.length && s1.startsWith(s2)){
                return ""
            }
            const len = Math.min(s1.length, s2.length)

            for(let ptr = 0; ptr < len; ptr++){
                if(s1[ptr] != s2[ptr]){
                    adj[s1[ptr]].push(s2[ptr])
                    ind[s2[ptr]] = ind[s2[ptr]] + 1
                    break
                }
            }
        }

        // Topo - Kahns Algorith
        const queue = []
        for(const ch in ind){
            if(ind[ch] == 0){
                queue.push(ch)
            }
        }

        let result = ""
        while(queue.length > 0){
            const node = queue.shift()
            result += node

            for(const nei of adj[node]){
                ind[nei]--
                if(ind[nei] == 0){
                    queue.push(nei)
                }
            }
        }
        return result.length == Object.keys(adj).length ? result : ""
    }
}

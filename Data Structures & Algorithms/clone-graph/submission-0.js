/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map()

        function dfs(node){
            if(node == null){
                return null
            }
            if(oldToNew.has(node)){
                return oldToNew.get(node)
            }
            const copy = new Node(node.val)
            oldToNew.set(node, copy)

            for(const n of node.neighbors){
                copy.neighbors.push(dfs(n))
            }

            return copy
        }

        return dfs(node)
    }
}

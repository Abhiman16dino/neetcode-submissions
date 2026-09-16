/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    verticalOrder(root) {
        if(root == null){
            return []
        }
        const cols = new Map();
        const queue = [[root, 0]]
    
        let minCol = 0
        let maxCol = 0

        while(queue.length > 0){
            const [node, col] = queue.shift()
            if(!cols.has(col)){
                cols.set(col, [])
            }
            cols.get(col).push(node.val)
            minCol = Math.min(minCol, col)
            maxCol = Math.max(maxCol, col)
            if(node.left){
                queue.push([node.left, col - 1])
            }
            if(node.right){
                queue.push([node.right, col + 1])
            }
        }

    const res = []
    for(let c =minCol; c <= maxCol; c++){
        res.push(cols.get(c))
    }
    return res;
    }
}

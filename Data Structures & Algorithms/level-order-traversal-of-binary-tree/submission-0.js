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
    levelOrder(root) {
        if(!root) return [];
        const res = []
        const queue = []
        queue.push(root)
        while(queue.length > 0){
            const size = queue.length;
            const level = []
            for(let i = 0; i < size; i++){
                const node = queue.shift()
                node.left && queue.push(node.left)
                node.right && queue.push(node.right)
                level.push(node.val)
            }
            res.push(level)
        }
        return res
    }
}

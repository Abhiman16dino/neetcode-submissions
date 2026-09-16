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
        if(!root){
            return []
        }
        const q = []
        const res = []
        q.push(root)
        while(q.length > 0){
            const length = q.length
            const level = []
            for(let i = 0; i < length; i++){
                const node = q.shift()
                level.push(node.val)
                node.left && q.push(node.left)
                node.right && q.push(node.right)
            }
            res.push(level)
        }
        return res
    }
}

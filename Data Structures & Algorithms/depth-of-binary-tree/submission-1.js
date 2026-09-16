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
     * @return {number}
     */
    maxDepth(root) {
        function dfs(node){
            if(!node){
                return 0
            }
            const left = 1 + dfs(node.left)
            const right = 1 + dfs(node.right)

            return Math.max(left, right)
        }

        return dfs(root)
    }
}

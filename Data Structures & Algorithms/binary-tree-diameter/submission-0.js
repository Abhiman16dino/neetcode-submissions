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
    diameterOfBinaryTree(root) {
        let diameter = 0
        function dfs(root){
            if(!root) return 0;
            const lh = dfs(root.left)
            const rh = dfs(root.right)

            diameter = Math.max(diameter, lh + rh)
            return 1 + Math.max(lh, rh)
        }
        dfs(root)
        return diameter
    }
}

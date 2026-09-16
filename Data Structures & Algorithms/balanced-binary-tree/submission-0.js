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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(root){
            if(!root) return 0;
            const lh = dfs(root.left)
            if(lh == -1){
                return -1
            }
            const rh = dfs(root.right)
            if(rh == -1){
                return -1
            }

            if(Math.abs(lh - rh) > 1){
                return -1;
            }

            return 1 + Math.max(lh, rh)
        }
        return dfs(root) != -1
    }
}

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
    isValidBST(root) {
        if(!root) return true;
        function check(node, left, right){
            if(!node) return true;
            if(node.val <= left || node.val >= right){
                return false
            }
            return check(node.left, left, node.val) && check(node.right, node.val, right)
        }
        return check(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
}

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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot) return true;
        if(!root) return false;
        function isSameTree(p, q){
            if( p == null || q == null){
                return p == q
            }
            return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
        }
        if(isSameTree(root, subRoot)){
            return true
        } else {
            return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
        }

        }
    }


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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const res = []
        function preorder(root, level){
            if(!root) return;
            if(level == res.length){
                res.push(root.val)
            }
            root.right && preorder(root.right, level+1)
            root.left && preorder(root.left, level+1)
        }
        preorder(root, 0)
        return res
    }
}

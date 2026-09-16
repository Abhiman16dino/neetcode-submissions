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
    goodNodes(root) {
        function travel(root, maxVal){
            if(!root) return 0;
            let res = root.val >= maxVal ? 1 : 0
            maxVal = Math.max(maxVal, root.val)
            res += travel(root.left, maxVal)
            res += travel(root.right, maxVal)
            return res
        }
        return travel(root, root.val)
    }
}

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
    maxPathSum(root) {
        let max = Number.MIN_SAFE_INTEGER
        
        function maxSum(node) {
            if(!node) return 0;

            const lMaxSum = Math.max(0, maxSum(node.left))
            const rMaxSum = Math.max(0, maxSum(node.right))

            max = Math.max(max, node.val + lMaxSum + rMaxSum)

            return node.val + Math.max(lMaxSum, rMaxSum)
        }

        maxSum(root)
        return max
    }
}

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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        if(preorder.length == 0 || inorder.length == 0){ return null; }
        //index the inorder
        const index = new Map()
        for(let i=0; i < inorder.length; i++){
            index.set(inorder[i], i)
        }

        let preIndex = 0

        function helper(left, right){
            if(left > right) return null;

            const rootVal = preorder[preIndex++]
            const root = new TreeNode(rootVal)

            const ind = index.get(rootVal)
            root.left = helper(left, ind - 1)
            root.right = helper(ind + 1, right)
            
            return root
        }

        return helper(0, inorder.length - 1)
    }
}

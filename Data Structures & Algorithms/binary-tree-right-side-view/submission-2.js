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
        if(!root){
            return []
        }
        const q = []
        const BFS = []
        const res = []
        q.push(root)
        while(q.length > 0){
            const len = q.length
            const lvl = []
            for(let i = 0; i < len; i++){
                const node = q.shift()
                node.left && q.push(node.left)
                node.right && q.push(node.right)
                lvl.push(node.val)
            }
            BFS.push(lvl)
            res.push(lvl.pop())
        }
        return res
    }
}

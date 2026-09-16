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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return ""
        let str = []
        const queue = []
        queue.push(root)
        while(queue.length){
            const node = queue.shift()
            if(node) {
                str.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            } else {
                str.push('#')
            }
        }
        return str.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(!data.length) return null;
        const values = data.split(',');
        const root = new TreeNode(parseInt(values[0]))
        const queue = [root]
        let i = 1;
        while(queue.length){
            const node = queue.shift()

            const leftVal = values[i++]
            if(leftVal != "#"){
                node.left = new TreeNode(parseInt(leftVal))
                queue.push(node.left)
            }

            const rightVal = values[i++]
            if(rightVal != "#"){
                node.right = new TreeNode(parseInt(rightVal))
                queue.push(node.right)
            }
        }
        return root
    }
}

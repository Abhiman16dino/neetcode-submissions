// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if (!head) return null;

        const oldToNew = new Map()
        let curr = head

        while(curr){
            oldToNew.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head
        while(curr){
            oldToNew.get(curr).next = oldToNew.get(curr.next) || null
            oldToNew.get(curr).random = oldToNew.get(curr.random) || null
            curr = curr.next
        }

        return oldToNew.get(head)
    }
}

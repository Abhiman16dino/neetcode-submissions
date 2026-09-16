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
        if(head == null){
            return null;
        }

        let oldToNew = new Map();
        oldToNew.set(null,null);
        let curr = head;

        while(curr){
            let copy = new Node(curr.val)
            oldToNew.set(curr, copy)
            curr = curr.next;
        }

        curr = head;
        while(curr){
            let node = oldToNew.get(curr);
            node.next = oldToNew.get(curr.next);
            node.random = oldToNew.get(curr.random);
            curr = curr.next;
        }

        return oldToNew.get(head);
    }
}

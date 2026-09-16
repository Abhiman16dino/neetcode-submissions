/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        if(lists.length === 0 ){
            return null
        }

        let head = lists[0]

        for(let i = 1; i < lists.length; i++){
            const currentList = lists[i]
            head = this.merge(head, currentList)
        }

        return head
    }

    merge(l1, l2) {
        const dummy = new ListNode();
        let tail = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        if (l1) {
            tail.next = l1;
        }
        if (l2) {
            tail.next = l2;
        }
        return dummy.next;
    }
}

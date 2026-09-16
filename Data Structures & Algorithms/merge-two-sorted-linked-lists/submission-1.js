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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let p1 = list1
        let p2 = list2
        let dummy = new ListNode()
        let curr = dummy

        while(p1 && p2){
            if(p1.val < p2.val){
                curr.next = p1
                p1 = p1.next

            } else {
                curr.next = p2
                p2 = p2.next
            }
            curr = curr.next
        }

        if(p1 == null){
            curr.next = p2
        }

        if(p2 == null){
            curr.next = p1
        }

        return dummy.next
    }
}

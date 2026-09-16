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
        if (lists.length === 0) return null 
        function merge(list1, list2){
            const dummy = new ListNode()
            let curr = dummy
            let ptr1 = list1
            let ptr2 = list2

            while(ptr1 && ptr2){
                if(ptr1.val < ptr2.val){
                    curr.next = ptr1
                    ptr1 = ptr1.next
                } else {
                    curr.next = ptr2
                    ptr2 = ptr2.next
                }
                curr = curr.next
            }
            if(ptr1){
                curr.next = ptr1
            }
            if(ptr2){
                curr.next = ptr2
            }
            return dummy.next
        }

        while(lists.length > 1){
            const l1 = lists.shift()
            const l2 = lists.shift()
            const res = merge(l1, l2)
            lists.push(res)
        }

        return lists[0]
    }
}

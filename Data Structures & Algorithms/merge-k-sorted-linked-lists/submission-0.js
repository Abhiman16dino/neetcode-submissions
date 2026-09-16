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

        const arr = []

        for(let list of lists){
            let curr = list
            while(curr){
                arr.push(curr.val)
                curr = curr.next
            }
        }
        arr.sort((a,b) => a - b)
        
        for(let i=0; i<arr.length; i++) {
            const val = arr[i];
            const node = new ListNode(val);
            arr[i] = node
        }

        for(let i=0; i < arr.length-1; i++){
            arr[i].next = arr[i+1]
        }

        return arr[0]
    }
}

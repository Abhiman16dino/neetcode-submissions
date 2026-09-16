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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        // Create first number, as the list is already in reverse order we can simply find it
        let curr = l1
        let num1 = 0;
        let pos = 1;
        while(curr){
            num1 = num1 + ( curr.val * pos )
            curr = curr.next
            pos *= 10
        }

        // Create the second number similarly
        pos = 1
        curr = l2
        let num2 = 0;
        while(curr){
            num2 = num2 + ( curr.val * pos )
            curr = curr.next
            pos *= 10
        }

        // Create the result of sum
        let res = (num1 + num2).toString()

        // Storage for saving all the nodes
        let arr = [];

        // Add all the nodes
        for(let ch of res){
            let node = new ListNode(+ch, null);
            arr.push(node)
        }

        let length = arr.length - 1

        // Assign pointers in reverse order as required by question 
        while(length > 0){
            arr[length].next = arr[length - 1]
            --length
        }

        // Return last node in array as it was required in reverse order
        return arr[arr.length - 1]
    }
}

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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow.next;
        slow.next = null;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        curr = head;

        console.log(head, prev)

        while(prev){
            let temp1 = curr.next;

            curr.next = prev;
            console.log(head)
            prev = prev.next;
            curr = curr.next;
            curr.next = temp1;
            curr = curr.next;
            console.log(head)
            
            
        }

        console.log(head, prev)
    }
}

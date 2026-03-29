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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let prev = null;
        let l = head;
        let r = head;

        let i = 0;

        while(i !== n){
            r = r.next;
            i++
        }
        if(!r){
            return head.next;
        }
        
        while(r){
            prev = l;
            l = l.next;
            r = r.next;
        }

        prev.next = l.next;

        return head;
    }
}

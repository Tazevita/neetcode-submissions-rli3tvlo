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
        let headLength = 0;
        let curr = head;

        while(curr){
            headLength++
            curr = curr.next;
        }

        let goalI = headLength - n + 1;

        let i = 0;

        curr = head;

        if ((goalI) === 1) {
            return head.next;
        }

        while(curr){
            console.log(goalI, i)
            if(i === goalI - 2){
                curr.next = curr.next.next;
            } else{
                curr = curr.next;
            }
            i++
        }
        console.log(goalI)
        return head;
    }
}

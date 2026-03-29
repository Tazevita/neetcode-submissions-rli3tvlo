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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let dummy = new ListNode(0, null)
        let tail = dummy;
        let cur = head;

        while(cur){
            if(cur.val !== val){
                tail.next = new ListNode(cur.val, null);
                tail = tail.next;
            }
            cur = cur.next;
        }
        return dummy.next;
    }
}

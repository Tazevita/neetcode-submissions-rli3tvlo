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
        if (!head || !head.next) return head;
        
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow.next;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let odd = true;
        let dummy = new ListNode();
        let node = dummy;

        while(prev && head){
            if(odd){
                node.next = head;
                head = head.next;
                odd = false;
            } else{
                node.next = prev;
                prev = prev.next;
                odd = true;
            }
            node = node.next;
        }

        if(prev){
            node.next = prev;
        } else{
            node.next = head;
        }

        node = node.next;
        node.next = null;
        return dummy.next;

    }
}

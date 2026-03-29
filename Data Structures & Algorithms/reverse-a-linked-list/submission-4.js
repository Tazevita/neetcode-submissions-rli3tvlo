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
     * @return {ListNode}
     */
    reverseList(head) {

        let curr = head;

        function reverse(prev, node){
            if(node === null){
                return prev;
            }

            let temp = node.next;
            node.next = prev;
            prev = node;
            return reverse(prev, temp);
        }

        return reverse(null, curr);

        
    }
}

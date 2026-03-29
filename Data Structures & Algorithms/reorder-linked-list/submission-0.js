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

        function copyList(headNew){
            if (!headNew) return null;

            let newHead = new ListNode(headNew.val);
            let currentOld = headNew.next;
            let currentNew = newHead;

             while (currentOld) {
                currentNew.next = new ListNode(currentOld.val);
                currentNew = currentNew.next;
                currentOld = currentOld.next;
            }

            return newHead;
        }

        let newHead = copyList(head)

        let prev = null;
        let curr = newHead;
        let goal = 0;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            goal++
        }

        let dummy = new ListNode();
        let node = dummy;

        let odd = true;
        let count = 0;

        while(prev && head && goal > count){
            if(odd){
                node.next = head;
                head = head.next
                odd = false;
                count++
            } else{
                node.next = prev;
                prev = prev.next;
                odd = true;
                count++
            }
            node = node.next;
        }
        node.next = null;

        return dummy.next;
    }
}

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

        let sum = 0;
        let carry = 0;

        let text = "";

        let dummy = new ListNode();
        let pointer = dummy;

        while(l1 || l2){
            if(l1 && l2){
                sum = l1.val + l2.val + carry;
                carry = 0;
                l1 = l1.next;
                l2 = l2.next;
            } else if(l1){
                sum = l1.val + carry;
                carry = 0
                l1 = l1.next;
            } else if(l2){
                sum = l2.val + carry;
                carry = 0;
                l2 = l2.next;
            }

            if(sum > 9){
                sum = sum - 10;
                carry++
            }

             pointer.next = new ListNode(sum);
             pointer = pointer.next;
        }

        if(carry){
            pointer.next = new ListNode(carry);
            pointer.next;
        }

        // let dummy = new ListNode();
        // let pointer = dummy;

        // for(let i = 0; i < text.length; i++){
        //     pointer.next = new ListNode(parseInt(text[i]))
        //     pointer = pointer.next;
        // }
        
        return dummy.next;

    }
}

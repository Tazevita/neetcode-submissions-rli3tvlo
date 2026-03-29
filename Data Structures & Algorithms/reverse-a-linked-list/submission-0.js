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
        

        // while(head.val !== null){
            
        // }
        let prev = null;
        let curr = head;

        console.log(head)

       while(curr){
            let temp = curr.next;
            // temp = 1...
            curr.next = prev;
            // curr.next = null
            prev = curr;
            // prev = 0...
            curr = temp;
            // curr = 1..
       }


       let object = {number: 1, next:{number: 2, next:{number:3, next: null}}}

       return prev;

    }
}

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
     * @return {boolean}
     */
    isPalindrome(head){
        
        let stack = [];
        let cur = head;

        while(cur){
            stack.push(cur.val);
            cur = cur.next;
        }

        let l = 0;
        let r = stack.length - 1;

        while(l <= r){
            if(stack[l] !== stack[r]){
                return false;
            }
            l++
            r--
        }

        return true;
    }
}

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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let counter = 0;
        let total = 0;

        let newNode = new ListNode(0, null);
        let tail = newNode;
        let cur = head;

        let temp = cur;

        while(temp){
            temp = temp.next;
            total++
        }

        while(cur){
            let prev2 = null;   

            if(counter < k && total >= k){
                while(counter < k){
                    let temp = cur.next;
                    cur.next = prev2;
                    prev2 = cur;
                    cur = temp
                    counter++
                    total--
                }
            } else{
                tail.next = cur;
                break;
            }
            
            if(prev2){
                tail.next = prev2;
            }

            while(tail.next){
                tail = tail.next;
            }

            counter = 0;
        }

        return newNode.next;

        
    }
}

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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let dummy = new ListNode(0, null)
        let tail = dummy;

        for(let i = 0; i < lists.length; i++){
            tail.next = lists[i]
            while(tail.next){
                tail = tail.next
            }
        }

        function recursive(list){
            if(!list || !list.next){
                return list;
            }
            let prev = null;
            let slow = list;
            let fast = list;

            while(fast && fast.next){
                prev = slow;
                slow = slow.next;
                fast = fast.next.next;
            }

            prev.next = null;

            let left = recursive(list);
            let right = recursive(slow);

            let out = new ListNode(0, null);
            let outTail = out;

            while(left && right){
                if(left.val > right.val){
                    outTail.next = right;
                    right = right.next
                } else{
                    outTail.next = left;
                    left = left.next;
                }
                outTail = outTail.next;
            }

            if(left){
                outTail.next = left;
            } else if(right){
                outTail.next = right;
            }

            return out.next;
        }

        return recursive(dummy.next);


    }
}

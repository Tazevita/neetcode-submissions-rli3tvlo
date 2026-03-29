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

        let min = Infinity;
        let hm = {};

        while(!lists.every(x => x === null)){
            for(let i = 0; i < lists.length; i++){
                if(lists[i] !== null){
                    console.log(lists[i].val)
                    min = Math.min(min, lists[i].val)
                    hm[lists[i].val] = i;
                }
            }
            tail.next = lists[hm[min]];
            tail = tail.next;
            lists[hm[min]] = lists[hm[min]].next;
            min = Infinity;
            hm = {};
        }

        return dummy.next;

    }
}

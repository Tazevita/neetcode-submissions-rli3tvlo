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
        if(!lists || lists.length === 0){
            return null;
        }

        function mergeList(l1, l2){
            let dummy = new ListNode(0, null);
            let tail = dummy;

            while(l1 && l2){
                if(l1.val < l2.val){
                    tail.next = l1;
                    l1 = l1.next
                } else{
                    tail.next = l2;
                    l2 = l2.next;
                }
                tail = tail.next;
            }
            if(l1){
                tail.next = l1;
            } else if(l2){
                tail.next = l2;
            }
            return dummy.next;
        }

        while(lists.length > 1){

            let mergedLists = [];

            for(let i =0; i < lists.length; i = i+2){
                let list1 = lists[i];
                let list2 = null;
                if((i + 1) < lists.length){
                    list2 = lists[i+1];
                }
                let newList = mergeList(list1, list2)
                mergedLists.push(newList)
 
            }
            lists = mergedLists;
        }

        return lists[0];

    }
}

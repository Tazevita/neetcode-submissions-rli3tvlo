// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        let dummy = new Node(0, null, null)
        let tail = dummy;
        let cur = head;

        let map1 = new Map()

        while(cur){
            tail.next = new Node(cur.val, null, null);
            tail = tail.next;

            map1.set(cur, tail)

            cur = cur.next;
        }

        cur = head;
        tail = dummy;

        while(cur){
            tail = tail.next;
            if(map1.has(cur.random)){
                tail.random = map1.get(cur.random) 
            }
            cur = cur.next;
        }
        return dummy.next;

    }
}

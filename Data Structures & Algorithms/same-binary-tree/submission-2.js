/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        let pArray = [];
        let qArray = [];

        function dig(node, list){
            if(node === null){
                return null;
            }
        
            let left = dig(node.left, list);
            let right = dig(node.right, list);

            if(left){
                list.push(left.val)
            } else{
                list.push(null)
            }

            if(right){
                list.push(right.val)
            } else{
                list.push(null)
            }
            
            return node;
        }
        
        if(p){
            pArray.push(p.val)
        }
        if(q){
            qArray.push(q.val)
        }

        dig(p, pArray)
        dig(q, qArray)

        if(pArray.length !== qArray.length){
            return false;
        }
        
        for(let i = 0; i < pArray.length; i++){
            if(pArray[i] !== qArray[i]){
                return false;
            }
        }
        return true;
    }
}

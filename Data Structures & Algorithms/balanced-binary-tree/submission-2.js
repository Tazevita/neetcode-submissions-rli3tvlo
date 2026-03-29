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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(root === null){
            return true;
        }

        let out = true;
        
        function dig(node){
            if(node === null){
                return 0;
            }
            let left = dig(node.left);
            let right = dig(node.right);

            let difference = 0;

            if(left > right){
                difference = left - right;
            } else{
                difference = right - left;
            }

            if(difference > 1){
                out = false;
            }

            return 1 + Math.max(left, right)
        }

        dig(root)

        if(out === false){
            return false;
        }
        
        return true;
    }
}

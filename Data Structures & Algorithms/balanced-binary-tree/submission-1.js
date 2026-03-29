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
                console.log(left, right)
            }

            return 1 + Math.max(left, right)
        }

        let r = 0;
        let l = 0;

        if(root.right !== null){
            r = dig(root.right);
        }

        if(root.left !== null){
            l = dig(root.left);
        }

        if(out === false){
            return false;
        }

        console.log(l, r)

        let difference = 0;

        if(l > r){
            difference = l - r;
        } else{
            difference = r - l;
        }

        if(difference > 1){
            return false;
        }
        return true;
    }
}

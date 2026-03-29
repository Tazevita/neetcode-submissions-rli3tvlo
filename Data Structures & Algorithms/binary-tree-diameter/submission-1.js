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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(root === null){
            return 0;
        }
        let max = 0;

        function dig(node){
            if(node === null){
                return 0;
            }
        
            let left = dig(node.left);
            let right = dig(node.right);

            console.log(left,right)

            max = Math.max(max, left + right);
            return 1 + Math.max(left, right);
        }

        dig(root)

        return max;
    }
}

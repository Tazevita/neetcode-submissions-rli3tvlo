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
    maxDepth(root) {
        if(root === null){
            return 0;
        }
        let max = 1;
        
        function check(node, number){
            if(node === null){
                return null;
            }
            max = Math.max(max, number)

            check(node.left, number + 1)
            check(node.right, number + 1)
        }

        check(root, max)

        return max;

    }
}

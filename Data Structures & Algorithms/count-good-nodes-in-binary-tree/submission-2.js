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
    goodNodes(root) {
        if (!root) return 0;

        let out = 0;

        function dfs(node, highestNum){
            if(!node) return 0;

            let highest = Math.max(node.val, highestNum)

            if(node.val >= highestNum){
                console.log(node.val)
                out++
            }

            dfs(node.left, highest)
            dfs(node.right, highest)
        }

        dfs(root, root.val)
        
        return out;
    }
}

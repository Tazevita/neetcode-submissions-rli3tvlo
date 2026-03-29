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
     * @return {number[]}
     */
    inorderTraversal(root) {
        let out = [];
        function dfs(node){
            if(!node) return;

            dfs(node.left)
            out.push(node.val)
            dfs(node.right)
        }
        dfs(root)

        return out;
    }
}

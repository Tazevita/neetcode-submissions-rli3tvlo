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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let out = []

        function dfs(node){
            if(!node) return;
            dfs(node.left, false)
            console.log(node.val)
            out.push(node.val)
            dfs(node.right, true)
        }

        dfs(root)
        return out[k-1];
    }
}

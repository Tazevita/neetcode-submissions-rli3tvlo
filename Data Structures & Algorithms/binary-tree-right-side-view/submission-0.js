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
    rightSideView(root) {
        let maxRLevel = 0;
        let out = []

        function dfs(node, right, level){
            if(!node){
                return null;
            }

            if(right && level > maxRLevel){
                out.push(node.val)
                maxRLevel = Math.max(maxRLevel, level)
            }

            dfs(node.right, true, level + 1);
            if(!node.right){
               dfs(node.left, true, level + 1); 
            } else {
                dfs(node.left, false, level + 1);
            }
        }

        dfs(root, true, 1)

        return out;
    }
}

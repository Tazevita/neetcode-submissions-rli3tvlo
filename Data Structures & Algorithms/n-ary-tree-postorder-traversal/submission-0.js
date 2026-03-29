/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {

        let out = [];
    
        function dfs(node){
            if(!node) return;
            
            for(let i = 0; i < node.children.length; i++){
                dfs(node.children[i])
            }

            out.push(node.val)
        }

        dfs(root);

        return out;
    }
}

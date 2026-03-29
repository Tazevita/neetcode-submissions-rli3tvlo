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
        let out = [];
        let queue = [];
        queue.push(root)

        while(queue.length > 0){
            let right = null;
            let qLen = queue.length;

            for(let i = 0; i < qLen; i++){
                let node = queue.shift()
                if(node){
                    right = node.val;
                    queue.push(node.left)
                    queue.push(node.right)
                }
            }
            if(right){
                out.push(right)
            }
        }

        return out;
    }
}

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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        let condition = true;
        let cur = root;

        if(!root){
            return new TreeNode(val, null, null)
        }

        while(condition){
            if(cur.right && val > cur.val){
                cur = cur.right;
            } else if(cur.left && val < cur.left){
                cur = cur.left
            } else{
                if(cur.val > val){
                    if(cur.left){
                        cur = cur.left;
                        continue;
                    }
                    cur.left = new TreeNode(val, null, null)
                } else if(cur.val < val){
                    if(cur.right){
                        cur = cur.right;
                        continue;
                    }
                    cur.right = new TreeNode(val, null, null)
                }
                condition = false;
            }
        }

        return root;
    }
}

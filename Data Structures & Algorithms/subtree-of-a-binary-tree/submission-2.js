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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot){
            return true;
        }
        if(!root){
            return false;
        }

        if(this.isSameTree(root, subRoot)){
            return true;
        }

        let left = this.isSubtree(root.left, subRoot)
        let right = this.isSubtree(root.right, subRoot)

        return (left || right);

    }

    isSameTree(tree1, tree2){
        if(!tree1 && !tree2){
            return true;
        }
        
        if(tree1 && tree2 && tree1.val === tree2.val){
            let left = this.isSameTree(tree1.left, tree2.left);
            let right = this.isSameTree(tree1.right, tree2.right);

            return (left && right);
        }
        return false;
    }
}

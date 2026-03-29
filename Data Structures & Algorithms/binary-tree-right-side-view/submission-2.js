/**
 * Definition for a binary tree node.
 * class TreeNode {
 * constructor(val = 0, left = null, right = null) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];
        if (!root) return result;

        // Initialize queue with the root node
        const queue = [root];

        while (queue.length > 0) {
            const levelSize = queue.length;
            let rightNode = queue[queue.length-1];

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();

                if (node) {
                    // Keep updating rightNode; the last one in this loop 
                    // will be the actual rightmost node of this level
                    
                    // Add children to the queue for the next level
                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                }
            }
            
            // After the level loop, the last 'rightNode' is the one visible
            if (rightNode) {
                result.push(rightNode.val);
            }
        }

        return result;
    }
}
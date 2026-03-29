class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let max = 0;
        let buffer = 0;

        let l = 0;
        let r = 1;

        while(r < height.length){
            if(height[r] >= height[l]){
                max = max + buffer;
                buffer = 0;
                l = r;
            } else {
                buffer = buffer + (height[l] - height[r])
            }
            r++ 
        }

         if (buffer > 0 && l < height.length - 1) {

            let rightMax = 0;

        for (let i = height.length - 1; i > l; i--) {
            if (height[i] >= rightMax) {
                rightMax = height[i];
            } else {
                max += rightMax - height[i];
            }
        }
    }
        return max;
    }
}

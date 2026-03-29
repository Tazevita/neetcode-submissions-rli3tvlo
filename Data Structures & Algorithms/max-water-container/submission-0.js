class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let maxHeight = 0;

        while(l<r){
            let shortest = Math.min(heights[l], heights[r]);
            let currentHeight = (r - l) * shortest;

            maxHeight = Math.max(currentHeight, maxHeight)

            if(heights[l] <= heights[r]){
                l++
            } else {
                r--
            }
        }

        return maxHeight;
        
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let out = 0;
        let stack = [];
        let index = [];

        for(const [i, height] of heights.entries()){
            let start = i;
            while(stack[stack.length - 1] > height){
                let poppedHeight = stack.pop();
                let poppedIndex = index.pop();

                out = Math.max(out, poppedHeight * (i - poppedIndex));

                start = poppedIndex;
            }
            stack.push(height)
            index.push(start)
            console.log(stack, index)
        }

        for(const [i, item] of stack.entries()){
            out = Math.max(out, item * (heights.length - index[i]))
        }

        return out;
    }
}

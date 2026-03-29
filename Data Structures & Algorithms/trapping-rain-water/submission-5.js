class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length < 3){
            return 0;
        }

        let l = 0;
        let r = height.length - 1;
        let highestL = 0;
        let highestR = 0;
        let sum = 0;
        
        while(l !== r){
            if(height[l] > height[r]){
                highestR = Math.max(highestR, height[r])
                sum = sum + (highestR - height[r]);
                r--
            } else{
                highestL = Math.max(highestL, height[l])
                sum = sum + (highestL - height[l]);
                l++
            }
        }

        return sum;
    }
}

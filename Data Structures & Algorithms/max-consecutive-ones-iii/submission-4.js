class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let l = 0;
        let max = 0;
        let zeros = 0;

        for(let r = 0; r < nums.length; r++){
            if(nums[r] === 0) zeros++

            while(zeros>k){
                if (nums[l] === 0) zeros--;
                l++;
            }

            max = Math.max(max, r-l+1)
        }
        return max;
    }
}

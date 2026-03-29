class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let out = [];

        let prev = [];

        for(let i = 0; i < nums.length; i++){
            if(nums[prev[0]] < nums[i]){
                prev = [];
                prev.push(i);
            } else if(nums[prev[prev.length - 1]] < nums[i]){
                while(nums[prev[prev.length - 1]] < nums[i]){
                    prev.pop()
                }
                prev.push(i)
            } else{
                prev.push(i)
            }
            if(i >= k - 1){
                out.push(nums[prev[0]])
            }
            if(prev[0] === i - (k - 1)){
                prev.shift()
            }
        }
        return out;
    }
}

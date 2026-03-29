class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hm = {};

        for(let i = 0; i < nums.length; i++){
            if(!hm[nums[i]]){
                hm[nums[i]] = 0;
            }
            hm[nums[i]]++;

            if(hm[nums[i]] >= nums.length/2){
                return nums[i]
            }
        }
    }
}

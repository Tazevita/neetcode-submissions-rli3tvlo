class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)

        let out = [];

        for(let i = 0; i < nums.length; i++){
            if(nums[i] > 0 || nums[i] === nums[i - 1]){
                continue
            }
            let l = i + 1;
            let r = nums.length - 1;

            while(l < r){
                let currentSum = nums[i] + nums[l] + nums[r];

                if(currentSum > 0){
                    r--
                } else if(currentSum < 0){
                    l++
                } else{
                    out.push([nums[i], nums[l], nums[r]])
                    l++
                    while(nums[l] === nums[l - 1] && l < r){
                        l++
                    }
                }
            }
        }
        return out;
    }
}

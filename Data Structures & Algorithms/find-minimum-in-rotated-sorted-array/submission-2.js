class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length <= 2){
            return Math.min(...nums)
        }
        let l = 0;
        let r = nums.length - 1;

        while(l <= r){
            if(nums[l] <= nums[r]){
                return nums[l];
            } else{
                let middle = Math.floor((r+l) / 2);

                if(nums[middle] < nums[middle - 1] && nums[middle] < nums[middle + 1]){
                    return nums[middle];
                }

                if(nums[middle] > nums[r]){
                    l = middle + 1;
                } else if(nums[middle] < nums[r]){
                    r = middle - 1;
                } else{
                    return nums[middle]
                }
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length;
        let mid = Math.floor((r / 2) - l);

        while(l < r){
            console.log(nums[mid])
            if(nums[mid] < target){
                l = mid + 1;
                mid = Math.floor((r + l) / 2);
            } else if(nums[mid] > target){
                r = mid-1;
                mid = Math.floor((r + l) / 2);
            }
            if(nums[mid] === target){
                return mid
            }
        }
        return -1

    }
}

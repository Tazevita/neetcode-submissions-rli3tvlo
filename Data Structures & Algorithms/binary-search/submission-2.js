class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l <= r){
            let middle = Math.floor((l + r) / 2);

            if(target > nums[middle]){
                l = middle + 1;
                console.log(nums[middle])
            } else if(target < nums[middle]){
                r = middle - 1;
                console.log(nums[middle])
            } else{
                return middle;
            }
        }
        return -1;
    }
}

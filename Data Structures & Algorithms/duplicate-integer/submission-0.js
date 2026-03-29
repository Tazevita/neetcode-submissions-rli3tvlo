class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = new Set(nums);

        if(numSet.size < nums.length){
            return true
        } else{
            return false
        }
    }
}

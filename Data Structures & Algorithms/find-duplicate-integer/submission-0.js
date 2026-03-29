class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        while(true){
            slow = nums[slow];
            fast = nums[fast];
            fast = nums[fast];

            if(nums[slow] === nums[fast]){
                break;
            }
        }

        if(slow !== fast){
            return nums[slow];
        }

        let slow2 = 0;

        while(slow2 !== slow){
            slow = nums[slow];
            slow2 = nums[slow2];
        }

        return slow;
    }
}

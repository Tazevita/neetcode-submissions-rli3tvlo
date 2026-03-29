class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let hashmap = {};

        for(let i = 0; i < nums.length; i++){
            let neededNum = target - nums[i];
            if(hashmap[neededNum] !== undefined){
                return [hashmap[neededNum], i]
            }

            hashmap[nums[i]] = i;

        }

        return []
    }
}

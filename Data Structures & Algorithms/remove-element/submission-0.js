class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let out = 0;
        for(let i = 0; i < nums.length; i++){
            console.log(nums[i])
            while(nums[i] === val){
                console.log(i)
                nums.splice(i, 1)
            }
            if(nums[i] !== val){
                out++
            }
        }
        console.log(nums)
        return out;
    }
}

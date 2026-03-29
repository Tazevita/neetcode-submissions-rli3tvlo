class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let out = [];

        let pointer = 0;

        let prevIndex = [];

        for(let i = 0; i < k; i++){
            if(prevIndex[pointer] === undefined){
                prevIndex[pointer] = i;
            }

            if(nums[i] >= nums[prevIndex[pointer]]){
                pointer = prevIndex.length - 1;
                prevIndex[pointer] = i;
            } else if(nums[i] < nums[prevIndex[pointer]] &&  nums[i] > nums[prevIndex[prevIndex.length - 1]]){
                while(nums[i] > nums[prevIndex[prevIndex.length - 1]]){
                    prevIndex.pop()
                }
                prevIndex.push(i);
            } else{
                prevIndex.push(i);
            }
        }


        let l = 0;

        for(let r = k - 1; r < nums.length; r++){


            if(nums[r] >= nums[prevIndex[pointer]]){
                pointer = prevIndex.length - 1;
                prevIndex[pointer] = r;
            } else if(nums[r] < nums[prevIndex[pointer]] && nums[r] > nums[prevIndex[prevIndex.length - 1]]){
                while(nums[r] > nums[prevIndex[prevIndex.length - 1]]){
                    prevIndex.pop()
                }
                prevIndex.push(r);
            } else{
                prevIndex.push(r);
            }

            out.push(nums[prevIndex[pointer]])

            if(prevIndex[pointer] === l){
                pointer++
            }
            l++
        }
       
        return out;
    }
}
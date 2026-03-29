class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let out = [];

        let pointer = 0;

        let prevQ = [];
        let prevIndex = [];

        for(let i = 0; i < k; i++){
            if(!prevQ[pointer]){
                prevQ[pointer] = nums[i];
                prevIndex[pointer] = i;
            }

            if(nums[i] >= prevQ[pointer]){
                pointer = prevQ.length - 1;
                prevQ[pointer] = nums[i];
                prevIndex[pointer] = i;
            } else if(nums[i] < prevQ[pointer] &&  nums[i] > prevQ[prevQ.length - 1]){
                while(nums[i] > prevQ[prevQ.length - 1]){
                    prevQ.pop();
                    prevIndex.pop()
                }
                prevQ.push(nums[i]);
                prevIndex.push(i);
            } else{
                prevQ.push(nums[i]);
                prevIndex.push(i);
            }
        }


        let l = 0;

        for(let r = k - 1; r < nums.length; r++){


            if(nums[r] >= prevQ[pointer]){
                pointer = prevQ.length - 1;
                prevQ[pointer] = nums[r];
                prevIndex[pointer] = r;
            } else if(nums[r] < prevQ[pointer] && nums[r] > prevQ[prevQ.length - 1]){
                while(nums[r] > prevQ[prevQ.length - 1]){
                    prevQ.pop();
                    prevIndex.pop()
                }
                prevQ.push(nums[r]);
                prevIndex.push(r);
            } else{
                prevQ.push(nums[r]);
                prevIndex.push(r);
            }

            out.push(prevQ[pointer])

            if(prevIndex[pointer] === l){
                pointer++
            }
            l++
        }
       
        return out;
    }
}

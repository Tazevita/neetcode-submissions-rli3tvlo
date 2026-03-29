class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let out = [];

        let prevQ = [];
        let prevIndex = [];

        for(let i = 0; i < k; i++){
            if(!prevQ[0]){
                prevQ[0] = nums[i];
                prevIndex[0] = i;
            }

            if(nums[i] >= prevQ[0]){
                prevQ = [];
                prevIndex = [];
                prevQ[0] = nums[i];
                prevIndex[0] = i;
            } else if(nums[i] < prevQ[0] &&  nums[i] > prevQ[prevQ.length - 1]){
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

            if(nums[r] >= prevQ[0]){
                prevQ = [];
                prevIndex = [];
                prevQ[0] = nums[r];
                prevIndex[0] = r;
            } else if(nums[r] < prevQ[0] && nums[r] > prevQ[prevQ.length - 1]){
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

            out.push(prevQ[0])

            if(prevIndex[0] === l){
                prevQ.shift();
                prevIndex.shift();
            }
            l++;
        }
       

        return out;
    }
}

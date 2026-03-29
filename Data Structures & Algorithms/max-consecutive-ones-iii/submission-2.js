class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let l = 0;
        let r = 0;

        let max = 0;

        let kCount = k;
        let zeros = []

        while(r < nums.length){

            while(l < r && l !== zeros[0] && nums[l] !== 1){
                l++
            }

            if(nums[r] === 1){
                r++
                max = Math.max(max, r-l)
            } else if(kCount > 0){
                zeros.push(r)
                kCount--
                r++
                max = Math.max(max, r-l)
            } else if(zeros[0] === l){
                zeros.shift();
                l++
                kCount++
            } else if(l < r){
                l++
            } else{
                r++
            }

            console.log(l,r, kCount)
        }

        return max;

    }
}

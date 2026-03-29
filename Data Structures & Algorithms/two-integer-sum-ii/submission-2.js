class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length-1;

        while(l !== r){
            let currentNum = numbers[l] + numbers[r];

            console.log(currentNum)

            if(currentNum < target){
                l++
            }
            if (currentNum > target){
                r--
            }
            if(currentNum === target){
                return [l + 1, r + 1]
            }
        }
    }
}

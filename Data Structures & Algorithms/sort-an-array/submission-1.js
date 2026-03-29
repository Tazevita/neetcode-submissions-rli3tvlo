class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        
        function recursive(array){
            if(array.length === 1){
                return array;
            }
            let m = Math.floor((array.length - 1) / 2)

            let l = array.slice(0, m + 1);
            let r = array.slice(m+1, array.length);

            let sortedL = recursive(l);
            let sortedR = recursive(r);

            let indexL = 0;
            let indexR = 0;

            let newArray = [];

            while(indexL < sortedL.length && indexR < sortedR.length){
                if(sortedL[indexL] < sortedR[indexR]){
                    newArray.push(sortedL[indexL])
                    indexL++
                } else {
                    newArray.push(sortedR[indexR])
                    indexR++
                }
            }
            while(indexL < sortedL.length){
                newArray.push(sortedL[indexL])
                indexL++
            }
            while(indexR < sortedR.length){
                newArray.push(sortedR[indexR])
                indexR++
            }

            return newArray
        }

        return recursive(nums)
    }
}

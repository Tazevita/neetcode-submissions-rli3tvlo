class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr){
        let out = [];
        let highest = -1;
        for(let i = arr.length - 1; i >= 0; i--){
            out.unshift(highest);
            highest = Math.max(highest, arr[i])
        }
        return out;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs){
        let res = strs[0];

        for(let i = 1; i < strs.length; i++){
            if(strs[i].length < res.length){
                res = res.substring(0, strs[i].length)
            }
            for(let j = 0; j < strs[i].length; j++){
                if(res[j] !== strs[i][j]){
                    res = res.substring(0, j)
                }
            }
        }
        return res;

    }
}

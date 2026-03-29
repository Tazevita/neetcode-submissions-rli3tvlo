class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let last = 0;
        let cur = 0;

        for(let i = 0; i < s.length; i++){
            if(s[i] === " "){
                cur = 0;
            } else{
                cur++
                last = cur;
            }
        }
        return last;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let max = 0;
        let cur = 0;

        let l = 0;
        let r = 0;

        while(r < s.length){
            if(set.has(s[r])){
                set.delete(s[l])
                l++
                cur--
            } else {
                set.add(s[r])
                r++
                cur++ 
            }
            max = Math.max(cur, max)
        }

        return max;
    }
}

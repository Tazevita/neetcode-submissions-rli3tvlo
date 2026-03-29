class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        var flex = k;
        let cur = 1;
        let max = 1;

        let l = 0;
        let r = 1;

        while(l < s.length){
            if(s[l] === s[r] || flex > 0){
                if(flex > 0 && s[l] !== s[r]){
                    flex--
                }
                cur++
                r++
                max = Math.max(max, cur + flex)
                if(max > s.length){
                    max = s.length
                }
                console.log(cur, flex, l, r)
            } else{
                flex = k
                l++
                r = l + 1;
                cur = 1;
            }
            if(r > s.length){
                flex = k
                l++
                r = l + 1;
                cur = 1;
            }
        }

        return max;
    }
}

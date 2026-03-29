class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let out = false;

        let permutation = {};

        for(let i = 0; i < s1.length; i++){
            if(!permutation[s1[i]]){
                permutation[s1[i]] = 0;
            }
            permutation[s1[i]] = permutation[s1[i]] + 1;
        }

        let current = {}

        let l = 0;

        for(let r = 0; r < s2.length; r++){
            if((r - l) > (s1.length - 1)){
                current[s2[l]] = current[s2[l]] - 1;
                l++
            }
            if(!current[s2[r]]){
                current[s2[r]] = 0;
            }
            current[s2[r]] = current[s2[r]] + 1;

            for(let i = 0; i < s1.length; i++){
                if(permutation[s1[i]] === current[s1[i]]){
                    out = true;
                } else{
                    out = false;
                    break
                }
            }
            if(out === true){
                return true;
            }
        }
        return out;



    }
}

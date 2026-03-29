class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let needed = {};
        let neededCount = 0;
        for(let i = 0; i < t.length; i++){
            if(needed[t[i]] === undefined){
                needed[t[i]] = 0;
            }
            needed[t[i]]++
            neededCount++
        }

        let current = {}
        let currentCount = 0;

        let res = "";

        let l = 0;

        for(let r = 0; r < s.length; r++){
            if(current[s[r]] === undefined){
                current[s[r]] = 0;
            }
            if(current[s[r]] < needed[s[r]]){
                currentCount++
            }
            if(needed[s[r]] !== undefined){
                current[s[r]]++
            }
            while(currentCount === neededCount){
                if(res.length > s.substring(l, r + 1).length || res === ""){
                    res = s.substring(l, r + 1);
                }
                console.log(res, current, s.substring(l, r + 1))
                current[s[l]]--
                if(current[s[l]] < needed[s[l]]){
                    currentCount--
                }
                l++
            }
            console.log(l,r, currentCount)

            if(r === s.length - 1){
                current[s[l]]--
                if(current[s[l]] < needed[s[l]]){
                    currentCount--
                }
                l++
            }
            
        }

        return res;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let sMap = new Map();
        let tMap = new Map();

        if(s.length !== t.length){
            return false
        }

        for(let i = 0; i < s.length; i++){

            if(!sMap.has(s[i])){
                sMap.set(s[i], 0)
            }
            sMap.set(s[i], sMap.get(s[i]) + 1)

            if(!tMap.has(t[i])){
                tMap.set(t[i], 0)
            }
            tMap.set(t[i], tMap.get(t[i]) +1) 
        }

        for (let i = 0; i < s.length; i++) {
            if (tMap.get(s[i]) !== sMap.get(s[i])) {
                return false;
            }
        }

        return true
    }
}

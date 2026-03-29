class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let sMap = new Map();
        let tMap = new Map();

        let uniqueSet = new Set();

        if(s.length !== t.length){
            return false
        }

        for(let i = 0; i < s.length; i++){

            uniqueSet.add(s[i])

            if(sMap.has(s[i])){
                sMap.set(s[i], (sMap.get(s[i]) + 1))
            } else{
                sMap.set(s[i], 1)
            }

            if(tMap.has(t[i])){
                tMap.set(t[i], (tMap.get(t[i]) + 1))
            } else{
                tMap.set(t[i], 1)
            }
        }

        for (const key of uniqueSet) {
            if (tMap.get(key) !== sMap.get(key)) {
                return false;
            }
        }


        return true
    }
}

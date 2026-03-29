class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let tPos = 0;
        let out = 0;

        for(let i = 0; i < s.length; i++){
            if(s[i] === t[tPos]){
                tPos++
            }
        }

        return (t.length - tPos)

    }
}

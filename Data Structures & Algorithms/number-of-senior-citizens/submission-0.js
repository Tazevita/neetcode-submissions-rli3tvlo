class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let out = 0;
        for(let i = 0; i < details.length; i++){
            if(parseInt(details[i].substring(11,13)) > 60){
                out++
            }
        }
        return out;
    }
}

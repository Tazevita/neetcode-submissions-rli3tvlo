class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs) {
        let out = "";

        for(let i = 0; i < strs.length; i++){
            let char = "";

            for(let j = 0; j < strs[i].length; j++){
                char = char + strs[i][j].charCodeAt(0) + '-';
            }

    
            out = out + char + "+";
        }
        return out;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let out = [];
        let word = ""

        let build = "";

        for(let i = 0; i < str.length; i++){
            if(!isNaN(Number(str[i]))){
                build = build + str[i];
            } else if(str[i] === '+'){
                out.push(word);
                word = "";
            } else{
                word = word + String.fromCharCode(Number(build))
                build = "";
            }
        }


        return out;
    }
}

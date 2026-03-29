class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";
        for(let s = 0; s < strs.length; s++){
            output = output + "!" + strs[s].length + "!" + strs[s];
        }
        console.log(output)
        return(output)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str){
        let i = 0;
        let endIndex = 1;

        let output = [];
        while(i < str.length){
            let arrayItem = "";

            while (str[endIndex] !== '!'){
                endIndex++
            }
            
            let arrayItemLength = parseInt(str.slice(i + 1, endIndex));

            for(let j = 1; j < arrayItemLength + 1; j++){
                arrayItem = arrayItem + str[endIndex + j]
            }
            output.push(arrayItem)
            i = endIndex + arrayItemLength + 1;
            endIndex = i + 1;

        }

        return output;

    }
}

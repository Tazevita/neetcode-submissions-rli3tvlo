class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let out = [];
        for(let i = 0; i < tokens.length; i++){
            if(tokens[i] === '+'){

                let newNum = out[out.length - 2] + out[out.length - 1];

                out.pop()
                out.pop()

                out.push(newNum)

            } else if(tokens[i] === '-'){
                let newNum = out[out.length - 2] - out[out.length - 1];

                out.pop()
                out.pop()

                out.push(newNum)
            } else if(tokens[i] === '*'){
                let newNum = out[out.length - 2] * out[out.length - 1];

                out.pop()
                out.pop()

                out.push(newNum)
                
            } else if(tokens[i] === '/'){
                let newNum = Math.trunc(out[out.length - 2] / out[out.length - 1]);

                out.pop()
                out.pop()

                out.push(newNum)
                
            } else{
                out.push(parseInt(tokens[i]))
            }
        }

        return out[0];
    }
}

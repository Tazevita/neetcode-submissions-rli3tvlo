class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let pos = []
        let out = []
        for(let i = 0; i < temperatures.length; i++){
            out.push(0)
        }

        for(let i = 0; i < temperatures.length; i++){
            
            while(temperatures[i] > stack[stack.length - 1] && stack.length > 0){
                out[pos[pos.length - 1]] = i - pos[pos.length - 1];
                stack.pop()
                pos.pop()
            }
            stack.push(temperatures[i])
            pos.push(i)
        }

        return out;
    }
}

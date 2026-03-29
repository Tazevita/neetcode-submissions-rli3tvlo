class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, index) => [p, speed[index]]).sort((a, b) => a[0] - b[0]);;

        let stack = [];

        for(let i = cars.length -1; i > -1; i--){
            let car = cars[i];
            let pos = car[0]
            let s = car[1];
            stack.push((target - pos) / s);
            if(stack.length >= 1 && stack[stack.length-1] <= stack[stack.length-2]){
                stack.pop();
            }
        }
        return stack.length;
    }
}

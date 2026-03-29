class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = 0;
        
        let lowest = 0;

        for(let i = 0; i < piles.length; i++){
            r = Math.max(r, piles[i])
        }


        let middle = Math.floor((l+r)/2);

        while (l <= r){

            middle = Math.floor((l+r)/2);
            console.log(middle)

            let bananas = 0;

            for(let i = 0; i < piles.length; i++){
                bananas = bananas + Math.ceil(piles[i]/middle)
            }

            console.log(bananas)

            if(bananas <= h){
                lowest = middle;
                r = middle - 1;
            } else{
                l = middle + 1;
            }
        }
        return lowest;
    }
}

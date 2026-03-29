class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let count = 0;
        for(let i = 0; i < flowerbed.length; i++){
            if((flowerbed[i-1] === 0 || flowerbed[i-1] === undefined) && flowerbed[i] === 0 && (flowerbed[i+1] === 0 || flowerbed[i+1] === undefined)){
                count++
                i++
            }
        }

        return (count >= n)
    }
}

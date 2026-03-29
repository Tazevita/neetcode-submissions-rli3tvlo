class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = 0;
        for(let r = 0; r < prices.length; r++){
            if(prices[r] < prices[l]){
                l = r;
            }
            max = Math.max(prices[r] - prices[l], max);
        }
        return max;
    }
}

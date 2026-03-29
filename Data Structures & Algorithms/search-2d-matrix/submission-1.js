class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let colCount = matrix[0].length - 1;
        let rowCount = matrix.length - 1;

        let top = 0;
        let bot = rowCount;
        
        let row = -1;

        while(top <= bot){
            let middle = Math.floor((top + bot) / 2);

            if(matrix[middle][matrix[middle].length - 1] < target){
                top = middle + 1;
            } else if(matrix[middle][0] > target){
                bot = middle - 1;
            } else{
                row = middle;
                break
            }
        }
        console.log(bot, top)
        
        if(row === -1){
            return false;
        }

        top = row;

        let l = 0;
        let r = colCount;

        while(l <= r){
            let middle = Math.floor((r+l) / 2);

            if(matrix[top][middle] < target){
                l = middle + 1;
            } else if(matrix[top][middle] > target){
                r = middle - 1;
            } else{
                return true;
            }
        }
        return false;

        console.log(bot, top)
    }
}

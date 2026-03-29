class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let hm = {};
        let xSets = Array.from({ length: board.length }, () => new Set())

        for(let y = 0; y < board.length; y++){
            let ySet = new Set()
            for(let x = 0; x < board[y].length; x++){
                if (board[y][x] === '.') continue;

                if(!hm[(Math.ceil((x + 1) / 3) + '+' + Math.ceil((y + 1) / 3))]) {
                    hm[(Math.ceil((x + 1) / 3) + '+' + Math.ceil((y + 1) / 3))] = new Set()
                }
                if(hm[(Math.ceil((x + 1) / 3) + '+' + Math.ceil((y + 1) / 3))].has(board[y][x])){
                    return false;
                } else{
                    hm[(Math.ceil((x + 1) / 3) + '+' + Math.ceil((y + 1) / 3))].add(board[y][x])
                }

                if(ySet.has(board[y][x])){
                    return false;
                } else{
                    ySet.add(board[y][x])
                }
                if(xSets[x].has(board[y][x])){
                    return false;
                }
                xSets[x].add(board[y][x])
            }
        }
        return true;
    }
}

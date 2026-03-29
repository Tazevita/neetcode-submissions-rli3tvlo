class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let hm = {};
        let ySets = Array.from({ length: board.length }, () => new Set())

        for(let y = 0; y < board.length; y++){
            let xSet = new Set()
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

                if(xSet.has(board[y][x])){
                    return false;
                } else{
                    xSet.add(board[y][x])
                }
                if(ySets[x].has(board[y][x])){
                    return false;
                }
                ySets[x].add(board[y][x])
                console.log(ySets)
            }
        }
        return true;
    }
}

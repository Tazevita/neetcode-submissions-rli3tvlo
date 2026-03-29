class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        let hashMap = new Map();
        let firstLetterPos = {};

        for(let i = 0; i < s.length; i++){
            if(!hashMap.has(s[i])){
                hashMap.set(s[i], 0)
            }
            if(firstLetterPos[s[i]] === undefined){
                firstLetterPos[s[i]] = i;
            }
            let curCount = hashMap.get(s[i]);
            hashMap.set(s[i], curCount+1);
        }

        let sortedKeys = [...hashMap.keys()]

        for(let i = 0; i < sortedKeys.length; i++){
            if(hashMap.get(sortedKeys[i]) === 1){
                return firstLetterPos[sortedKeys[i]];
            }
        }

        return -1;

    }
}

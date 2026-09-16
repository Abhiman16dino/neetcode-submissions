class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let enc = ''
        for(const word of strs){
            enc +=  `${word.length}#${word}` 
        }
        return enc;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const ans = []
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                ++j;
            }
            const length = parseInt(str.substring(i, j))
            i = j + 1;
            j = i + length;
            ans.push(str.substring(i, j))
            i = j;
        }

        return ans;
    }
}

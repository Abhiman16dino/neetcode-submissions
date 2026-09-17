class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_str = ""
        for(const str of strs){
            const len = str.length
            encoded_str += `${len}#${str}`
        }
        console.log(encoded_str)
        return encoded_str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        const decoded_str = []
        while(i < str.length){
            let j = i
            while( str[j] !== '#'){
                j++;
            }

            const len = +str.substring(i, j)
            decoded_str.push(str.substring(j+1, j+1+len))
            i = j+1+len

        }

        return decoded_str
    }
}

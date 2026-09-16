class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();

        function isAlphaNum(ch){
            const ascii = ch.charCodeAt(0);
            if((ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57)){
                return true;
            }
            return false;
        }

        let left = 0;
        let right = s.length - 1;

        while(left <= right){
            if(!isAlphaNum(s[left])){
                ++left;
                continue;
            }
            if(!isAlphaNum(s[right])){
                --right;
                continue
            }
            if(s[left] != s[right]){
                return false;
            }
            ++left;
            --right;
        }
        return true;
    }
}

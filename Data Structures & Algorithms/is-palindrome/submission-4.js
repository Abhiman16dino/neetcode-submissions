class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char){
        const code = char.charCodeAt(0);
        if(
            (code >= "a".charCodeAt(0)) && (code <= "z".charCodeAt(0)) ||
            (code >= "A".charCodeAt(0)) && (code <= "Z".charCodeAt(0)) ||
            (code >= "0".charCodeAt(0)) && (code <= "9".charCodeAt(0))
        ){
            return true
        }
        return false;
    }

    isPalindrome(s) {
        s = s.toUpperCase();
        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            if(!this.isAlphanumeric(s[l])){
                l++;
                continue;
            }
            if(!this.isAlphanumeric(s[r])){
                r--;
                continue
            }
            if(s[l] !== s[r]){
                console.log(`${s[l]} != ${s[r]} `)
                return false;
            } else {
                l++;
                r--;
            }
        }
        return true;
    }
}

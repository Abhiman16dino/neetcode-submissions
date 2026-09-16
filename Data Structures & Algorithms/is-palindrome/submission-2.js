class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            let i = 0;
    let j = s.length - 1;
    s = s.toLowerCase();

    function isalphaNum(cc){
        cc = cc.charCodeAt(0);
        if((cc > 47 && cc < 58) || (cc > 96 && cc < 123)){
            return true
        } else {
            return false;
        }
    }
    while(i <= j){
        if(!isalphaNum(s[i])) {
            i++;
            continue;
        }

        if(!isalphaNum(s[j])) {
            j--;
            continue;
        }

        if(s[i] !== s[j]){
            console.log(s[i])
            console.log(s[j])
            return false;
        }
        i++;
        j--;
    }
    return true;
    }
}

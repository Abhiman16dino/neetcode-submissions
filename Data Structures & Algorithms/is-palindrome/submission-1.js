class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Filter out non-alphanumeric

    s = s.toLowerCase();
    let filteredInput = ""
    // let end = s.length - 1
    for(let i=0; i<s.length; i++){
        if((s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122) ||
        (s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57)){
            filteredInput+=s[i];
        }
    }

    let end = filteredInput.length - 1

    for(let i=0; i<s.length; i++){
        if(i>=end){
            return true
        }
        if(filteredInput[i]!=filteredInput[end]){
            return false;
        }
        --end;
    }

    return true;
    }
}
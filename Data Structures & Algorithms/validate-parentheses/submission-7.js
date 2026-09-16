class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const ref = {
            '}' : '{',
            ')' : '(',
            ']' : '['
        }

        const stack = []

        for(const ch of s){
            if(ch == '{' || ch == '(' || ch == '[') {
                stack.push(ch)
            } else {
                const val = stack.pop()
                if(ref[ch] !== val){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}

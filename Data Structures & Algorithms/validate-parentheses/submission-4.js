class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        const obj = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        for(let c of s){
            if(Object.values(obj).includes(c)){
                stack.push(c);
            }
            else if (obj[c] == stack[stack.length - 1]) {
                stack.pop();
            }
            else {
                return false;
            }
        }

        return stack.length == 0;
    }
}

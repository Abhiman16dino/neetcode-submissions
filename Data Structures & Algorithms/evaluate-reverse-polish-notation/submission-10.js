class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const map = {
            '+' : (a, b) => a+b,
            '-' : (a, b) => a-b,
            '*' : (a, b) => a*b,
            '/' : (a, b) => Math.trunc(a/b),
        }
        const stack = []

        for(const token of tokens){
            if(token in map){
                const num2 = stack.pop()
                const num1 = stack.pop()
                const result = map[token](num1, num2)
                stack.push(result)
            } else {
                stack.push(Number(token))
            }
        }

        return stack[0]
    }
}

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let opr = ['+', '-', '*', '/'];
        let res = 0;
        const stack = [];

        const operators = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => (a / b) < 0 ? Math.ceil(a / b) : Math.floor(a / b),
        };

        for(const token of tokens){
            if(opr.includes(token)){
                const l1 = stack.pop();
                const l2 = stack.pop();
                stack.push(operators[token](l2,l1));
                console.log(token);
                console.log(stack);
                continue;
            }
            stack.push(+token);
            console.log(stack);
        }

        
        return stack.pop();
    }
}

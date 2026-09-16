class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const open = ['(', '[', '{'];
        const stack = [];
        for(let c of s){
            console.log(`c:${c}`);
            console.log(`inc:${open.includes(c)}`);
            if(open.includes(c)){
                stack.push(c)
            } else {
                const deletedItem = stack.pop();
                console.log(`D:${deletedItem}`);
                console.log(`c:${c}`);
                switch (c){
                    case '}': 
                        if(deletedItem == '{'){
                            break;
                        } else {
                            return false;
                        }
                    case ']': 
                        if(deletedItem == '['){
                            break;
                        } else {
                            return false;
                        }
                    case ')': 
                        if(deletedItem == '('){
                            break;
                        } else {
                            return false;
                        }
                }
            }
        }
        if(stack.length != 0){
            return false;
        }
        return true;
    }
}

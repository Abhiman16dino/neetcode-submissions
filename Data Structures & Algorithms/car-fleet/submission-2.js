class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map( (p, i) =>  [p, speed[i]]);
        pair = pair.sort((a,b) => a[0] -b[0]);
        const stack = [];
        console.log(pair)
        for(let i = pair.length-1; i >= 0; i--){
            const [pos, s] = pair[i];
            console.log(pos, s)
            const timeToReach = (target - pos) / s;
            console.log(timeToReach)
            stack.push(timeToReach);
            if(stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]){
                stack.pop()
            }
        }

        return stack.length
    }
}

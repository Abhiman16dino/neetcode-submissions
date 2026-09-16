class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        function dfs(i){
            if(i == 0){
                return 1
            }
            let one = 0, two = 0
            if(i-1 >= 0){
                one = dfs(i-1)
            }
            if(i-2 >= 0){
                two = dfs(i-2)
            }
            return one + two
        }
        return dfs(n)
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {

        const ans = []

        function isPalindrome(start, end){
            while(start <= end){
                if(s[start++] != s[end--]){
                    return false;
                }
            }
            return true;
        }

        function backtrack(index, path){
            if(index == s.length){
                ans.push([...path])
                return
            }
            for(let i = index; i < s.length; i++){
                if(isPalindrome(index, i)){
                    path.push(s.substring(index, i+1))
                    backtrack(i+1, path)
                    path.pop()
                }
            }
        }

        backtrack(0, [])
        return ans
    }
}

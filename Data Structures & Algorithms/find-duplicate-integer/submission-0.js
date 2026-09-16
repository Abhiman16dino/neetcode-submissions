class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let hash = {}
        for(let num of nums){
            if(hash[num]){
                return num;
            } else {
                hash[num] = 1;
            }
        }
        return false;
    }
}

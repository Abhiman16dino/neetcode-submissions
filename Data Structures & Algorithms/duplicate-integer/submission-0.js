class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniques = [];
        for(let item of nums){
            if(uniques.includes(item)){
                return true;
            } else {
                uniques.push(item);
            }
        }
    return false;
    }
}

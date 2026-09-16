class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const set = new Set()
        set.add(0)
        const n = nums.length

        let sum = 0
        for(const num of nums){
            sum += num
        }

        if(sum % 2 !== 0){
            return false
        }

        const target = sum/2

        for(let i = 1; i < n; i++){
            const newSums = []
            for(const num of set){
                const val = nums[i] + num
                if(val == target){
                    return true
                }
                newSums.push(val)
            }
            newSums.forEach(sum => set.add(sum))
        }

        return false
    }
}

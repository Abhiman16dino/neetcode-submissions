class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        for(const num of nums) {
            freq[num] = (freq[num] || 0) + 1
        }

        // console.log(freq)

        const bucket = {}
        for(const num in freq) {
            const fr = freq[num]
            if(!bucket[fr]){
                bucket[fr] = []
            }
            bucket[fr].push(num)
        }

        // console.log(bucket)

        const res = []
        for(let i = nums.length; i > 0; i--){
            if(bucket[i]){
                while(bucket[i].length > 0){
                    res.push(bucket[i].pop())
                    if(res.length == k){
                        return res
                    }
                }
            }
        }
        return res
    }
}

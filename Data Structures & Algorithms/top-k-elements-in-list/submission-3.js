class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const count = {}
        for(const num of nums){
            if(!count[num]){
                count[num] = 0;
            }
            count[num] += 1;
        }

        const freq = Array.from({length: nums.length+1}, () => []);

        for(const num in count){
            freq[count[num]].push(num);
        }

        let res = []
        for(let i = freq.length - 1; i >= 0; i--){
            for(const n of freq[i]){
                res.push(n);
                if(res.length == k){
                    return res;
                }
            }
        }
    }
}

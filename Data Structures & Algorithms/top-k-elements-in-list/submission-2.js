class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};
  const result = [];
  const bucket = [];

  for(let i=0 ; i<nums.length+1; i++){
    bucket.push([]);
  }

  for (let item of nums) {
    hash[item] ? (hash[item] = hash[item] + 1) : (hash[item] = 1);
  }

  for(const key in hash){
    bucket[hash[key]].push(key);
  }

  for(let i = bucket.length-1; i>=0 ; i--){
    if(bucket[i].length > 0){
        for(let item of bucket[i]){
            if(result.length == k){
                break;
            }
            result.push(item)
        }
    }
  }
  return result;
    }
}
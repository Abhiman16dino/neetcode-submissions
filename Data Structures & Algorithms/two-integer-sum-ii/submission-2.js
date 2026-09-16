class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=0; i<numbers.length-1; i++){
            let j = i+1;
            while(j<numbers.length){
                // console.log(numbers[i] + "-" + numbers[j])
                if(numbers[i]+numbers[j]==target){
                    return [i+1, j+1];
                }
                ++j;
            }
        }
    }
}

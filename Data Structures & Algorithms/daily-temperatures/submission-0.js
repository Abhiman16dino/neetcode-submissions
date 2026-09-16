class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Brute Force
        const length = temperatures.length;
        const res = Array(length).fill(0);

        for(let i=0; i<length-1; i++){
            for(let j=i+1; j<length; j++){
                if(temperatures[j] > temperatures[i]){
                    
                    res[i] = j - i;
                    console.log(`i = ${temperatures[i]}, j = ${temperatures[j]}, res = ${res}`);
                    break;
                }
            }
        }

        return res;
    }
}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let right = Math.max(...piles);
        let left = 1;
        let res = right;
        
        while( left <= right ) {
            const k = Math.floor((left+right)/2);
            let timeTaken = 0;
            for(const pile of piles){
                timeTaken += Math.ceil(pile/k);
            }
            if( timeTaken <= h){
                res = k;
                right = k - 1;
            } else {
                left = k + 1;
            }
        }

        return res;
    }
}

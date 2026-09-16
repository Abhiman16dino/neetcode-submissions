class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let k = 1
        while(true) {
            let totalTimeTakenWhileK = 0;
            for (let pile of piles) {
                totalTimeTakenWhileK = totalTimeTakenWhileK + Math.ceil(pile/k);
            }
            if(totalTimeTakenWhileK <= h){
                return k;
            }
            ++k;
        }
    }
}

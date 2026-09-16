class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        for(int stone : stones){
            pq.offer(stone);
        }
        while(pq.size() > 1){
            int stoneOne = pq.poll();
            int stoneTwo = pq.poll();
            int res;
            if(stoneOne > stoneTwo){
                res = stoneOne - stoneTwo;
            } else {
                res = stoneTwo - stoneOne;
            }
            if(res != 0) {
                pq.offer(res);
            }
        }

        if(pq.size() == 0){
            return 0;
        }
        return pq.poll();
    }
}

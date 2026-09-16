class Solution {
    public int leastInterval(char[] tasks, int n) {
        
        // Create the hashMap
        HashMap<Character, Integer> map = new HashMap<>();
        for(char task : tasks){
            map.put(task, map.getOrDefault(task, 0) + 1);
        }

        // Create Max Heap
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        pq.addAll(map.values());

        int time = 0;
        Queue<int[]> queue = new LinkedList<>();

        while(!pq.isEmpty() || !queue.isEmpty()){
            time += 1;
            if(!pq.isEmpty()){
                int count = pq.poll() - 1;
                if(count != 0){
                    queue.offer(new int[]{count, time+n});
                }
            }

            if(!queue.isEmpty() && queue.peek()[1] == time){
                pq.offer(queue.poll()[0]);
            }
        }

        return time;



    }
}

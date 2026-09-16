class Twitter {
    private static int timestamp = 0;

    // userId -> list of tweets
    private Map<Integer, List<Tweet>> tweetMap;
    // userId -> set of followees
    private Map<Integer, Set<Integer>> followMap;

    private class Tweet {
        int id;
        int time;

        Tweet(int id, int time) {
            this.id = id;
            this.time = time;
        }
    }

    public Twitter() {
        tweetMap = new HashMap<>();
        followMap = new HashMap<>();
    }

    public void postTweet(int userId, int tweetId) {
        tweetMap.putIfAbsent(userId, new ArrayList<>());
        tweetMap.get(userId).add(new Tweet(tweetId, timestamp++));
    }

    public List<Integer> getNewsFeed(int userId) {
        List<Integer> result = new ArrayList<>();

        // Ensure the user follows themself
        followMap.putIfAbsent(userId, new HashSet<>());
        followMap.get(userId).add(userId);

        // Min heap to get top 10 most recent tweets
        PriorityQueue<Tweet> minHeap = new PriorityQueue<>((a, b) -> a.time - b.time);

        for (int followeeId : followMap.get(userId)) {
            List<Tweet> tweets = tweetMap.get(followeeId);
            if (tweets == null) continue;

            for (Tweet tweet : tweets) {
                minHeap.offer(tweet);
                if (minHeap.size() > 10) {
                    minHeap.poll(); // Remove the oldest
                }
            }
        }

        // Extract from heap to list (reverse order)
        LinkedList<Integer> feed = new LinkedList<>();
        while (!minHeap.isEmpty()) {
            feed.addFirst(minHeap.poll().id);
        }

        return feed;
    }

    public void follow(int followerId, int followeeId) {
        followMap.putIfAbsent(followerId, new HashSet<>());
        followMap.get(followerId).add(followeeId);
    }

    public void unfollow(int followerId, int followeeId) {
        if (followMap.containsKey(followerId) && followerId != followeeId) {
            followMap.get(followerId).remove(followeeId);
        }
    }
}

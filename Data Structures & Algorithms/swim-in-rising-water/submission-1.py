# Push all path in minHeap for a positing with key always 
# the maximim of current height and previous height
# in the way we can reach the the dest with min path and also have the 
# max height in min path

class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        N = len(grid)
        visit = set()
        minH = [[grid[0][0], 0, 0]] # MaxH, r, c
        visit.add((0,0))

        direction = [[0,1], [0, -1], [1, 0], [-1, 0]]

        while minH:
            t, r, c = heapq.heappop(minH)

            if r == N - 1 and c == N - 1:
                return t
            
            for dr, dc in direction:
                nr, nc = r + dr, c + dc
                if(nr < 0 or nc < 0 or nr == N or nc == N or (nr, nc) in visit):
                    continue
                visit.add((nr, nc))
                heapq.heappush(minH, [max(t, grid[nr][nc]), nr, nc])
        

        
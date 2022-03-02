- 섬의 개수와 같은 문제
- DFS

```
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        dx = [-1, 0, 0, 1]
        dy = [0, -1, 1, 0]
        
        def DFS(x, y):
            stack = [[x, y]]
            grid[x][y] = -1
            
            while stack:
                x, y = stack[-1][0], stack[-1][1]
                for i in range(4):
                    nx = x + dx[i]
                    ny = y + dy[i]
                    if nx >= 0 and nx < len(grid) and ny >= 0 and ny < len(grid[0]):
                        if grid[nx][ny] == "1":
                            grid[nx][ny] = -1
                            stack = [[nx, ny]] + stack
                del stack[-1]
        
        ans = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1":
                    DFS(i, j)
                    ans += 1
        return ans
```

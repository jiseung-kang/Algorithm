from sys import stdin
from collections import deque
input = stdin.readline

n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
dist = [[[0]*4 for _ in range(m)] for _ in range(n)]
sx, sy, sd = map(int, input().split())
ex, ey, ed = map(int, input().split())
dx, dy = (0, 0, 1, -1), (1, -1, 0, 0)

def bfs():
    q = deque()
    q.append((sx-1, sy-1, sd-1))
    while q:
        x, y, d = q.popleft()
        if x == ex-1 and y == ey-1 and d == ed-1:
            print(dist[x][y][d])
            return
        for i in range(1, 4):
            nx, ny = x+dx[d]*i, y+dy[d]*i
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                break
            if a[nx][ny]:
                break
            if not dist[nx][ny][d]:
                q.append((nx, ny, d))
                dist[nx][ny][d] = dist[x][y][d]+1
        for i in range(4):
            if i == d:
                continue
            k = 2 if (i+d)%4 == 1 else 1
            if not dist[x][y][i]:
                q.append((x, y, i))
                dist[x][y][i] = dist[x][y][d]+k

bfs()

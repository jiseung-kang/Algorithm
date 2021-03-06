tc = int(input())
# 이동할 좌표
dx = [-1,1,0,0]
dy = [0,0,-1,1]

def dfs(a, b):
  stack = [[a,b]]
  while stack:
    x, y = stack[-1][0], stack[-1][1]
    del stack[-1]
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      if nx >= 0 and nx < N and ny >= 0 and ny < M:
        # 탐색된 구역을 탐색처리하고 너비우선탐색 queue에 추가해나간다.
        if field[nx][ny] == 1:
          field[nx][ny] = -1
          stack.append([nx, ny])
            
for _ in range(tc):
  ans = 0
  M, N, K = map(int, input().split())
  field = [[0 for _ in range(M)] for _ in range(N)]
  for _ in range(K):
    i, j = map(int, input().split())
    field[j][i] = 1
  for i in range(N):
    for j in range(M):
      if field[i][j] == 1:
        dfs(i,j)
        # bfs를 실행한 횟수 = 연결된 배추 그룹의 개수(필요한 지렁이 개수)
        ans += 1
  print(ans)
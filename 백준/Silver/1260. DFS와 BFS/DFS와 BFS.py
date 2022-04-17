N, M, V = map(int, input().split())
Graph = [[] for i in range(N+1)]
for _ in range(M):
  i, j = map(int, input().split())
  Graph[i].append(j)
  Graph[j].append(i)

def DFS(G):
  stack = sorted(G[V], reverse=True)
  visited = [V]
  while stack:
    if stack[-1] in visited:
      del stack[-1]
      continue
    visited.append(stack[-1])
    del stack[-1]
    stack += sorted(G[visited[-1]], reverse=True)
  print(' '.join(str(v) for v in visited))

DFS(Graph)

def BFS(G):
  queue = sorted(G[V])
  visited = [V]
  while queue:
    if queue[0] in visited:
      del queue[0]
      continue
    visited.append(queue[0])
    queue += sorted(G[queue[0]])
    del queue[0]
  print(' '.join(str(v) for v in visited))

BFS(Graph)
N, M = map(int, input().split())
graph = [[] for i in range(N)]
answer = [0 for i in range(N)]

for i in range(M):
	A, B = map(int, input().split())
	graph[A-1].append(B-1)
	graph[B-1].append(A-1)

def count(start):
	nums = [0 for i in range(N+1)]
	queue = [start]
	visited = [start]
	
	while (queue):
		tmp = queue[0]
		del queue[0]
		
		for i in graph[tmp]:
			if (i not in visited):
				nums[i] = nums[tmp] + 1
				visited.append(i)
				queue.append(i)

	return sum(nums)

for a in range(N):
	answer[a] = count(a)

print(answer.index(min(answer)) + 1)
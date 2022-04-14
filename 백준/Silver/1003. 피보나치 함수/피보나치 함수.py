N = int(input())
nums = []
for _ in range(N):
	nums.append(int(input()))

fib = [[1, 0], [0, 1]]
for i in range(2, max(nums)+1):
	fib.append([fib[i-1][0]+fib[i-2][0], fib[i-1][1]+fib[i-2][1]])
	
for n in nums:
	print(fib[n][0], fib[n][1])
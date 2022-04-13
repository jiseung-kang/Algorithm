N = int(input())
for _ in range(N):
	i = input()
	sum = 0
	tmp = 1
	for j in i:
		if j == 'O':
			sum += tmp
			tmp += 1
		else:
			tmp = 1
	print(sum)
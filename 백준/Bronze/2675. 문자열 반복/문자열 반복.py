length = int(input())

for _ in range(length):
	r, s = input().split()
	for i in s:
		print(i*int(r), end='')
	print()
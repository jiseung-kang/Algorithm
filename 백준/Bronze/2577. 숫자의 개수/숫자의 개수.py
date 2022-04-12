num = 1
for _ in range(3):
	num *= int(input())

dic = [0] * 10
for n in str(num):
	dic[int(n)] += 1

for d in dic:
	print(d)
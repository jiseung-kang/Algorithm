dic = dict()
for _ in range(10):
	i = int(input())%42
	if i not in dic:
		dic[i] = 1

print(len(dic))
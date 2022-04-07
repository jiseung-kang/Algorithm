word = input().upper()

dic = dict()
for w in word:
	if w in dic:
		dic[w] += 1
	else:
		dic[w] = 1

dic = sorted(dic.items(), key=lambda x: x[1], reverse=True)

if len(dic) == 1:
	print(dic[0][0])
elif dic[0][1] == dic[1][1]:
	print("?")
else:
	print(dic[0][0])
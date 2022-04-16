n = input().split('-')

sum = 0

s = n[0].split('+')
for t in s:
	sum += int(t)
sum = sum*2

p = 0

for i in n:
	k = i.split('+')
	for j in k:
			p += int(j)
	sum -= p
	p = 0

print(sum)
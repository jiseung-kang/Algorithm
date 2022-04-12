h, m = map(int, input().split())

if h == 0:
	h = 24

m += 60 * h
m -= 45

if m//60 >= 24:
	h = m//60 - 24
else:
	h = m //60
print(h, m%60)
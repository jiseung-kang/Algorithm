p = list(map(int, input().split()))

if p == sorted(p):
	print("ascending")
elif p == sorted(p, reverse=True):
	print("descending")
else:
	print("mixed")
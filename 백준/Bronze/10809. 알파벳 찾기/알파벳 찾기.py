s = input()
idx = ['-1'] * 26

for i in range(ord('a'), ord('z')+1):
	if s.find(chr(i)) != -1:
		idx[i-97] = str(s.index(chr(i)))

print(' '.join(idx))
nums = list(map(int, input().split()))

sum = 0
for num in nums:
	sum += num*num

print(sum % 10)
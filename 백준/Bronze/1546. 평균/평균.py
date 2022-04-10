N = input()
Ms = list(map(int, input().split()))

Sum = sum(Ms)/max(Ms)*100

print(float(Sum)/float(N))
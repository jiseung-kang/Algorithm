n = int(input())
conf = []
answer = 0

for i in range(n):
  conf.append(list(map(int, input().split())))

conf.sort(key= lambda x:(x[1], x[0])) # 끝나는 시간 순 정렬, 같다면 먼저 시작하는 회의부터

tmp = 0 # 현재 시간
for c in conf:
  if c[0] >= tmp: # 회의를 시작할 수 있다면
    tmp = c[1] # 회의를 배정하고 끝나는 시간 저장
    answer += 1 # 회의 수 카운트

print(answer)
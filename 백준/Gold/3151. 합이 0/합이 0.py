import sys

N = int(sys.stdin.readline())

coding = sorted(list(map(int, sys.stdin.readline().split())))

answer = 0

for i in range(N-2):
    choice_value = coding[i] # 선택값

    if choice_value > 0: # 정렬되어 있기 때문에 선택값이 최소이고 0보다 클 수 없음
        break

    left = i + 1
    right = N - 1

    while left < right:
        value = choice_value + coding[left] + coding[right]

        if value == 0:
            if coding[left] == coding[right]:
                answer += (right-left+1)*(right-left)//2 #nC2 적용
                break
            else:
                is_right = coding[right]
                r = 0
                while True: # right 값 달라질때까지 이동
                    if coding[right] != is_right:
                        break
                    else:
                        right -= 1
                        r += 1

                is_left = coding[left]
                l = 0
                while True: # left 값 달라질때까지 이동
                    if coding[left] != is_left:
                        break
                    else:
                        left += 1
                        l += 1
                answer += l*r # 이동값*이동값 경우의수

        elif value > 0: # 0보다 크면 right 감소 (투포인터)
            right -= 1

        else:
            left += 1 # 0보다 크면 left 증가 (투포인터)

print(answer)
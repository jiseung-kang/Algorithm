def solution(s):
    answer = True
    
    tmp = []
    for i in s:
        if i == '(':
            tmp.append(i)
        else:
            if tmp == []:
                return False
            elif tmp.pop() == '(':
                continue
            else:
                return False
    if tmp == []:
        return True
    else:
        return False
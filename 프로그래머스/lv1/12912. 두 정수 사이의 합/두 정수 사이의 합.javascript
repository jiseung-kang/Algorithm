function solution(a, b) {
    var answer = 0;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    else if (a == b) {
        return a;
    }
    for(var i = a; i < b + 1; i++) {
        answer += i;
    }
    return answer;
}
function solution(n) {
    for(var i = 0; i < n; i++) {
        if (n%i === 1) {
            return i;
        }
    }
}
function solution(w, h) {
    var answer = 0;
    if (w > h) {
        let tmp = h;
        h = w
        w = tmp
    }
    for(let i = 1; i < w; i++) {
        answer += (parseInt(h * (w-i) / w)) * 2
    }
    return answer;
}
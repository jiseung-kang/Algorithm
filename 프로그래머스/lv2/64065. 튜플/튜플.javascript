function solution(s) {
    var answer = [];
    arr = {}
    s = s.split('},{')
    s[0] = s[0].slice(2)
    s[s.length-1] = s[s.length-1].slice(0, -2)
    s.forEach((i => {
        i.split(',').forEach((tmp => {
            arr[Number(tmp)] = arr[Number(tmp)] === undefined ? 1 : arr[Number(tmp)] + 1;
        }))
    }))
    arr = Object.entries(arr).sort(function(a, b) {
        return b[1] - a[1];
    })
    answer = arr.map(a => {
        return Number(a[0])
    })
    return answer;
}
function solution(arr, divisor) {
    var answer = [];
    arr.forEach((a) => {
        if (a%divisor === 0){
            answer.push(a)
        }
    })
    return answer.length ===  0? [-1] :  answer.sort((a, b) => a - b);
}
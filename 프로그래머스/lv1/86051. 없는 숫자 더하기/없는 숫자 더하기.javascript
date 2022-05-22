function solution(numbers) {
    var answer = 0;
    var arr = [0,1,2,3,4,5,6,7,8,9];
    numbers.forEach(number => {
        arr[number] = 0;
    })
    arr.forEach(a => {
        answer += a;
    })
    
    return answer;
}
function solution(numbers) {
    let answer = numbers.sort((a, b) => (String(b) + String(a)) - (String(a) + String(b))).join('')
    if (answer[0] === '0') return '0'
    return answer
}
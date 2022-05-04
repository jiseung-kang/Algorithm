function solution(s) {
    var answer = s;
    
    var dict = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    dict.forEach((d, i) => {
        while (answer.includes(d))
        answer = answer.replace(d, i)
    })
    
    return parseInt(answer);
}
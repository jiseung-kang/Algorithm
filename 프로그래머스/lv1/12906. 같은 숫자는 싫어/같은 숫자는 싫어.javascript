function solution(arr)
{
    var answer = [];

    arr.forEach((v) => {
        if (answer[answer.length-1] !== v){
            answer.push(v)
        }
    })
    
    return answer;
}
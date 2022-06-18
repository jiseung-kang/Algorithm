function solution(clothes) {
    let answer = 1;
    
    const closet = {}
    
    clothes.forEach(cloth => {
        closet[cloth[1]] = closet[cloth[1]] ? closet[cloth[1]] + 1 : 1;
    })
    
    Object.values(closet).forEach(v => {
        answer *= v + 1
    })
    
    return answer - 1;
}
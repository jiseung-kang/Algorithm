function solution(s) {
    var answer = s.length;
    let len = s.length;

    if (len === 1) return 1;
    
    for(let i = 1; i <= len/2 + 1; i++){
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        let cut = s.match(re);
        comp = ''
        let count = 1 
        for (j = 0 ; j < cut.length; j++) {
            if (cut[j] === cut[j+1]) {
                count += 1;
            } else if (count === 1) {
                comp += `${cut[j]}`;
            } else if (count > 1) {
                comp += `${count}${cut[j]}`;
                count = 1;
            }
        }
        if (len % i !== 0){
            comp += s.slice(-len % i)
        }
        answer = Math.min(answer, comp.length)
    }
    return answer;
}
function solution(n) {
    const binary = (num) => {
        let res = ""
        
        while(num > 0) {
            res = num % 2 + res;
            num = parseInt(num/2)
        }
        
        return res;
    }
    
    const count1 = (num) => {
        let count = 0;
        for(let i = 0; i < num.length; i++) {
            count += Number(num[i])
        }
        
        return count;
    }
    
    let cnt = count1(binary(n))
    let res = 0;
    
    while (res !== cnt) {
        res = count1(binary(++n));
    }
    
    return n;
}
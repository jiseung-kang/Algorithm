function solution(s) {
    let answer = [];
    
    const binary = (n) => {
        if (n <= 1) return n;
        let result = ""
        
        while (n > 0) {
            result = n%2 + result;
            n = parseInt(n/2)
        }
        
        return result;
    }
    
    const count0 = (str) => {
        let cnt0 = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] != 1) cnt0++;
        }
        return cnt0;
    }
    
    const count1 = (str) => {
        let cnt1 = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == 1) cnt1++;
        }
        return cnt1;
    }
    
    let cnt = 0;
    let cnt0 = 0;
    
    while (true) {
        if (s == '1') {
            answer = [cnt, cnt0];
            cnt = 0;
            cnt0 = 0;
            break;
        }
        
        cnt0 += count0(s)
        cnt++;
        s = binary(count1(s))
    }
    
    return answer;
}
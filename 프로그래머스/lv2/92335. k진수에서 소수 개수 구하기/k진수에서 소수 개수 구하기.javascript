function solution(n, k) {
    var answer = 0;
    
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        if (num % 2 === 0) {
            return num === 2 ? true : false;
        }
        else {
            for (var i = 3; i < Math.sqrt(num) + 1; i++) {
                if (num % i == 0) {
                    return false;
                }
            }
        }
        return true;
    }
    
    var result = ""
    // while(n > 0) {
    //     result = n % k + result
    //     n = parseInt(n / k)
    // }
    
    result = n.toString(k)
    
    // while (result.includes("00")) {
    //     result = result.replace("00", "0")
    // }
    
    if (result.includes('0')) {
        result = result.split('0')
        result.forEach((r) => {
            while(r.includes('0')) {
                r = r.replace("0","")                
            }
            if (r !== "")
            answer += isPrime(parseInt(r));
        })
    }
    
    else {
        answer += isPrime(parseInt(result))
    }
    
    return answer;
}
function solution(n) {
    var answer = '';
    
    while (n > 0) {
        switch(parseInt(n%3)){
            case(1):
                answer = "1" + answer
                n = parseInt(n / 3)
                
                break; 
            case(2):
                answer = "2" + answer
                n = parseInt(n / 3)
                
                break;
            default:
                answer = "4" + answer
                n = parseInt(n / 3) - 1
                
                break;
        }
    }
    
    return answer;
}
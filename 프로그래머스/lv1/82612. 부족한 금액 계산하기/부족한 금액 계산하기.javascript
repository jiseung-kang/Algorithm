function solution(price, money, count) {
    var result = 0
    for(var i = 0; i < count; i++) {
        result += price * (i + 1)
    }
    
    if (money > result) {
        return 0;
    }

    return result - money;
}
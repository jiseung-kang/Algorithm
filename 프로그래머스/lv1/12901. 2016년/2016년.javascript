function solution(a, b) {
    var answer = '';
    var day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    var days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    var count = 0
    
    for(var i = 0; i < a - 1; i++) {
        count += days[i]
    }
    count += b - 1
    
    answer = day[count%7]
    
    return answer;
}
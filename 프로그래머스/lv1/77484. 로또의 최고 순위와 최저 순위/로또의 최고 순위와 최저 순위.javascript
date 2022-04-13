function solution(lottos, win_nums) {
    var answer = [0, 0];
    var count0 = 0;
    var win = 0;
    
    lottos.map((lotto) => {
        if (lotto === 0) {
            count0 += 1;
        }
        else {
            if (win_nums.includes(lotto)) {
                win += 1;
            }
        }
    })
    answer[1] = win > 1 ? 7 - win : 6;
    count0 = count0 + win > 6 ? 6 : count0 + win
    answer[0] = count0 > 1 ? 7 - count0 : 6;
    
    return answer;
}
function solution(fees, records) {
    
    function calcTime(start, end) {
        var [s_hour, s_min] = start.split(":");
        var [e_hour, e_min] = end.split(":");
        return (parseInt(e_hour) * 60 + parseInt(e_min)) - (parseInt(s_hour) * 60 + parseInt(s_min));
    }
    
    var answer = [];
    var info = {};
    
    var [b_time, b_fee, u_time, u_fee] = fees;
    
    function calcFee(t) {
        var total = 0;
        if (t <= b_time) {
            return b_fee;
        }
        total += b_fee
        t -= b_time
        t = Math.ceil(t/u_time)
        total += t * u_fee        
        return total;
    }
    
    records.forEach((record) => {
        var [time, car, des] = record.split(" ");
        if (info[car]) {
            info[car].push(time);
        }
        else {
            info[car] = [time];
        }
    })
    info = Object.entries(info).sort()
    Object.values(info).forEach((i) => {
        if (i[1].length % 2 !== 0) {
            i[1].push('23:59')
        }
        var time = 0;
        for(var t = 0; t < i[1].length; t+=2) {
            time += calcTime(i[1][t], i[1][t+1])
        }
        answer.push(calcFee(time));
    })
    return answer;
}
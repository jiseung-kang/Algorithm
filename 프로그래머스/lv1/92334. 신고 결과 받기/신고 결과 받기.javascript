function solution(id_list, report, k) {
    var answer = [];
    var report_list = [];
    var reported = []
    
    for(var r of report) {
        var v = r.split(' ')
        if (report_list[v[0]]) {
            if(!report_list[v[0]].includes(v[1])) {
                report_list[v[0]].push(v[1])
            }
            else{
                continue
            }
        }
        else {
            report_list[v[0]] = [v[1]]
        }
        if (reported[v[1]]) {
                reported[v[1]] += 1
        }
        else {
            reported[v[1]] = 1
        }
    }
    
    for(var id of id_list){
        var tmp = 0;
        if (report_list[id])
            report_list[id].forEach(r => reported[r] >= k ? tmp += 1 : null)
        answer.push(tmp)
    }
    
    return answer;
}
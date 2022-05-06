function solution(n, s, a, b, fares) {
    var answer = Infinity
    var roads = Array.from({length: n}, () => Array.from({length: n}, () => Infinity));
    
    for (var i = 0; i < n; i++) {
        roads[i][i] = 0;
    }
    
    fares.forEach((fare) => {
        roads[fare[0]-1][fare[1]-1] = fare[2]
        roads[fare[1]-1][fare[0]-1] = fare[2]
    })
    
    for (var k = 0; k < n; k++) {
        for (var i = 0; i < n; i++) {
            for (var j = i; j < n; j++) {
                if (i !== j) {
                    var tmp = Math.min(roads[i][j], roads[i][k] + roads[k][j])
                    roads[i][j] = tmp
                    roads[j][i] = tmp
                }
            }
        }
    }
    
    
    for(var k = 0; k < n; k++) {
        var tmp = roads[s-1][k] + roads[k][b-1] + roads[k][a-1]
        answer = Math.min(answer, tmp)
    }
    
    return answer;
}
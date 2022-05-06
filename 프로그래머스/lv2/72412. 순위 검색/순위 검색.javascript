function solution(info, query) {
    const getCombinations = (array, selectNumber) => {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
    }
     
    var answer = [];
    var dict = []
    
    info.forEach((i) => {
        i = i.split(' ')
        score = i.pop()
        if (dict['']) dict[''].push(+score)
        else dict[''] = [+score]
        for (var j = 0; j < 5; j++) {
            getCombinations(i, j).forEach((comb) => {
                tmp = comb.join('')
                if (dict[tmp])
                    dict[tmp].push(+score)
                else
                    dict[tmp] = [+score]
            })
        }
    })
    
    Object.keys(dict).forEach((key) => {
        dict[key] = dict[key].sort((a,b) => a - b)
    })
    
    query.forEach((q) => {
        while(q.includes('-') || q.includes(' and ')) {
            q = q.replace(' and ', '')
            q = q.replace('-', '')
        }
        q = q.split(' ')
        score = q.pop()
        q = q[0]
        if (dict[q]) {
            var scores = dict[q]
            if (scores.length > 0) {
                var left = 0
                var right = scores.length
                while (right > left) {
                    var mid = Math.floor( (left + right) / 2 )
                    if (scores[mid] >= score) right = mid;
                    else left = mid + 1
                }
                answer.push(scores.length - left)
            }
        }
        else {
            answer.push(0)
        }
    })
    
    return answer;
}
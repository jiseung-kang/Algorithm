function solution(orders, course) {
    var answer = [];
    
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
    
    var set = {}
    orders.forEach((order) => {
        for(var i = 2; i < order.length + 1; i++) {
            getCombinations(order.split(""), i).forEach((comb) => {
                comb = comb.sort()
                if (set[comb] || order.includes(comb)) {
                   set[comb] += 1
                }
                else {
                    set[comb] = 1
                }
            })
        }
    })
    var sorted = Object.entries(set).sort(function(a,b){return b[1] - a[1]})
    sorted = sorted.filter((v) => v[1] > 1)
    course.forEach((c) => {
        sorted.filter((v) => v[0].split(',').length === c).forEach((i) => {
            if (answer.length === 0 || answer[answer.length - 1][0].split(',').length !== i[0].split(',').length || answer[answer.length - 1][1] <= i[1]) {
                               answer.push(i)
            }
        })
    })
    answer.forEach((a, i) => {
        answer[i] = answer[i][0].replace(/,/g, "");;
    })
    return answer.sort();
}
function solution(str1, str2) {
    let answer = 0;
    let intersection = 0;
    let union = 0;
    
    // str1 = str1.replace(/[^A-Z]/gi,'').toUpperCase()
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    let arr1 = []
    let arr2 = []
    for(let i = 0; i < str1.length - 1; i++) {
        let tmp = str1[i] + str1[i+1]
        if (tmp, /[^A-Z]/gi.test(tmp)) continue
        arr1.push(tmp)
    }
    for(let i = 0; i < str2.length - 1; i++) {
        let tmp = str2[i] + str2[i+1]
        if (tmp, /[^A-Z]/gi.test(tmp)) continue
        arr2.push(tmp)
    }
    if (arr1.length === 0 && arr2.length === 0) {
        return 65536;
    }
    
    union = arr1.length + arr2.length
    
    arr1.forEach(a => {
        if(arr2.includes(a)) {
            intersection += 1
            delete arr2[arr2.indexOf(a)]
        }
    })
    union -= intersection
    answer = parseInt(intersection/union * 65536)
    return answer;
}
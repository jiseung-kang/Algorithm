function solution(n, info) {
    var answer = [-1];
    
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
    
    lionMin = Array(11).fill(0)
    info.forEach((v, i) => {
        lionMin[i] = v + 1
    })
    
    combs = []
    for(var i = 1; i < 11; i++) {
        combs = [...combs, ...getCombinations([0,1,2,3,4,5,6,7,8,9,10], i)]
    }
    
    var lionMax = 0   
    combs.forEach((comb) => {
        var apeach = 0
        var lion = 0
        var lionboard = [0,0,0,0,0,0,0,0,0,0,0];
        var count = 0;
        comb.forEach((c) => {
            count += lionMin[10 - c]
            lionboard[10 - c] = lionMin[10 - c];
        })
        
        if (count > n) {
            return
        }
        
        while (count < n) {
            lionboard[10] += 1
            count++;
        }
        
        for(var i = 0; i < 11; i++) {
            if (info[i] < lionboard[i]) {
                lion += 10 - i
            }
            
            else if (info[i] !== 0) {
                apeach += 10 - i
            }
            else {
                continue;
            }
        }
        
        if (lion - apeach === lionMax) {
            answer.push(lionboard);
        }
        else if ((lion - apeach) > lionMax) {
            lionMax = lion - apeach
            answer = [lionboard];
        }
    })
    
    if( lionMax === 0) {
        return [-1]
    }
    
    return answer[answer.length - 1];
}

// function solution(n, info) {
//     var answer = [[-1]];
    
//     function combRep(arr, l) {
//         if(l === void 0) l = arr.length;
//         var data = Array(l),
//             results = [];
//         (function f(pos, start) {
//             if(pos === l) {
//                 results.push(data.slice());
//                 return;
//             }
//             for(var i=start; i<arr.length; ++i) {
//                 data[pos] = arr[i];
//                 f(pos+1, i);
//             }
//         })(0, 0);
//         return results;
//     }
    
//     var scores = [];
//     for(var i = 0; i < 11; i++) {
//         scores.push(10 - i)
//     }
    
//     var lionMax = 0
//     combRep(scores, n).forEach((comb) => {
//         var apeach = 0
//         var lion = 0
//         var lionboard = [0,0,0,0,0,0,0,0,0,0,0];
//         comb.forEach((c) => {
//             lionboard[10 - c] += 1
//         })
        
//         for(var i = 0; i < 11; i++) {
//             if (info[i] < lionboard[i]) {
//                 lion += 10 - i
//             }
            
//             else if (info[i] !== 0) {
//                 apeach += 10 - i
//             }
//             else {
//                 continue;
//             }
//         }
        
//         if (lion - apeach === lionMax) {
//             answer.push(lionboard.reverse());
//         }
//         else if ((lion - apeach) > lionMax) {
//             lionMax = lion - apeach
//             answer = [lionboard.reverse()];
//         }
//     })
    
//     if (lionMax === 0) {
//         return [-1]
//     }
//     console.log(answer)
    
//     // answer.sort((a, b) => {
// 	// return a[0] === b[0] ? a[1] === b[1] ? a[2] === b[2] ? a[3] === a[3] ? a[4] === a[4] ? a[5] === a[5] ? a[6] === a[6] ? a[7] === a[7] ? a[8] === a[8] ? a[9] === a[9] ? a[10] - a[10] ? : a[9] - b[9] : a[8] - b[8] : a[7] - b[7] : a[6] - b[6]: a[5] - b[5] : a[4] - b[4] : a[3] - b[3] : a[2] - b[2]  : a[1] - b[1]  : a[0] - b[0]
// // })
//     return answer[0].reverse();
// }
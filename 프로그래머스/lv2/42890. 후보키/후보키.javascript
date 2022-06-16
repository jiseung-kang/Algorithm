function solution(relation) {
    let answer = [];
    
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
    
    const isUnique = (A) => {
        return JSON.stringify([...new Set([...A])]) === JSON.stringify(A);
    }
    
    const AIncludesB = (A, B) => {
        return JSON.stringify(A) === JSON.stringify([...new Set([...A, ...B])]);
    }
    
    const makeRelation = (comb) => {
        const newRel = []
        relation.forEach(r => {
            let tmp = ""
            for(let i = 0; i < relation[0].length; i++) {
                if (comb.includes(i)) {
                    tmp += r[i]
                }
            }
            newRel.push(tmp)
        })
        
        return newRel
    }
    
    const possible = Array.from({length: relation[0].length}, (v, i) => i)
    const comb = []
    const checked = []
    
    for(let i = 1; i < possible.length + 1; i++) {
        comb.push(getCombinations(possible, i))
    }

    comb.forEach(c => {
        const arr = []
        c.forEach(i => {
            const rel = makeRelation(i)
            if (isUnique(rel)) {
                let isMin = true;
                for (let j = 0; j < answer.length; j++) {
                    if (AIncludesB(i, answer[j])) {
                        isMin = false;
                        break;
                    }
                }
                if (isMin) answer.push(i)
            }
        })
    })
    
    return answer.length;
}
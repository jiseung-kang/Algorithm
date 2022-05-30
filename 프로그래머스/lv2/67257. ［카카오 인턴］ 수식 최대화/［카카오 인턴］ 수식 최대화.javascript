const getPermutation = (str) => {
    let arr = [];
    let check = Array.from({length: str.length}, () => 0);
    let tmp = Array.from({length: str.length}, () => 0);
    
    function DFS(L) {
        if (L === str.length) {
            arr.push([...tmp])
            return
        };
        for (let i = 0; i < str.length; i++) {
            if (!check[i]) {
                check[i] = 1;
                tmp[L] = str[i];
                DFS(L + 1);
                check[i] = 0;
            }
        }
    }
    
    DFS(0);
    return arr;
}

function solution(expression) {
    const exp = expression.replace(/[0-9]/g, '');
    const token = expression.replace(/[^0-9]/g, ' $& ').split(' ');
    const exps = getPermutation([...new Set([...exp])]);
    const ans = []
    
    exps.forEach((exp, i) => {
        const tmp = [...token]
        exp.forEach(e => {
            while(tmp.includes(e)) {
                const idx = tmp.indexOf(e)
                tmp.splice(idx - 1, 3, new Function ('return '+ tmp[idx-1] + tmp[idx] + tmp[idx+1])())
            }
        })
        ans.push(Math.abs(tmp))
    })
    
    return Math.max(...ans)
    
}
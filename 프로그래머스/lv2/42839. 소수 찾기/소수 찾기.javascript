function solution(numbers) {
    let answer = 0;
 
    const getPermutations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]); 

        arr.forEach((fixed, index, origin) => {
          const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
          const permutations = getPermutations(rest, selectNumber - 1); 
          const attached = permutations.map((el) => [fixed, ...el]); 
          results.push(...attached); 
        });

        return results; 
    }
    
    const isPrime = (n) => {
        if (n < 2) return false
        if (n < 3) return true;
        for (let i = 2; i <= n/i; i++) {
            if (n%i === 0) return false;
        }
        return true
    }
    
    const nums = numbers.split('')
    let perm = []
    for (let i = 1; i < nums.length + 1; i++) {
        perm.push(...getPermutations(nums, i).map(p => Number(p.join(''))))
    }
    
    perm = new Set(perm)
    
    perm.forEach(p => {
        answer += isPrime(p) ? 1 : 0;
    })
    
    return answer;
}
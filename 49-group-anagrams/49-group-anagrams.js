/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const answer = []
    const res = {}
    
    strs.forEach((str) => {
        const tmp = str.split('').sort().join('')
        if (!res[tmp]) res[tmp] = [str]
        else res[tmp].push(str)
    })
    
    return Object.values(res)
};
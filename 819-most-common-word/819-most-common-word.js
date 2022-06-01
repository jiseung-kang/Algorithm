/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const result = []
    
    paragraph = paragraph.replaceAll(/[^a-zA-Z ]/g, " ").split(" ")
    paragraph.forEach(p => {
        p = p.toLowerCase()
        if (p.length !== 0 && !banned.includes(p)) {
            if (result[p]) result[p]++
            else result[p] = 1
        }
    })
    
    let tmp = 0
    let answer = ""
    Object.entries(result).forEach((r) => {
        if (r[1] > tmp) {
            tmp = r[1]
            answer = r[0]
        }
    })
    
    return answer
};
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {

    logs.sort((a, b) => {
        let tmp1 = a.split(' ')
        let tmp2 = b.split(' ')

        if (isNaN(tmp1[1]) && !isNaN(tmp2[1])) return -1
        if (!isNaN(tmp1[1]) && isNaN(tmp2[1])) return 1
        if (!isNaN(tmp1[1]) && !isNaN(tmp2[1])) return 0
        
        let i = tmp1.slice(1, tmp1.length)
        let j = tmp2.slice(1, tmp2.length)
            
        if (i > j) {
            return 1
        }
        else if (i < j) {
            return -1
        }
        
        if (tmp1[0] > tmp2[0]) {
            return 1
        }
        else return -1
    })
    
    return logs
};
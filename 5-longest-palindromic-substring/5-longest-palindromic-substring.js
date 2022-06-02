/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let answer = s[0];
    
    function check(left, right) {
        while (0 <= left && right < s.length && s[left] === s[right]) {
                left--
                right++
            }
        if ((right - left - 1) > answer.length) {
              answer = s.substring(left + 1, right);
        }  
    }
    
    for (let i = 0; i < s.length; i++) {
        check(i, i)
        check(i, i + 1)
    }
    
    return answer
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toUpperCase();
    s = s.replaceAll(/[^A-Z0-9]/g,'');
    
    for (let i = 0; i < s.length/2; i++) {
        if (s[i] !== s[s.length-i-1]) return false;
    }
    
    return true;
};
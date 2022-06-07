/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let answer = 0;
    let purchase = prices[0];
    
    for(let i = 1; i < prices.length; i++) { 
        if(purchase > prices[i]) {
            purchase = prices[i];
        } else if(prices[i] - purchase > answer) {
            answer = prices[i] - purchase;
        }
    }
    
    return answer;
};
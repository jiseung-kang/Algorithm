* 완전 탐색 (이중 for문)으로 문제를 풀면 시간초과
```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        for i in range(len(prices)):
            for j in range(i+1, len(prices)):
                if prices[j] > prices[i]:
                    ans = max(ans, prices[j]-prices[i])
        return ans
```
* 현재까지의 최솟값을 갱신하며 최대 수익을 구하는 식으로 한번의 for문으로 해결할 수 있다.
```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        curmin = max(prices)
        for i in range(len(prices)):
            if prices[i] < curmin:
                curmin = prices[i]
            ans = max(ans, prices[i]-curmin)
        return ans
```

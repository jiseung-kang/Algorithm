#include <bits/stdc++.h>
using namespace std;

int D[1000001];

int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);
  
  int n;
  cin >> n;
  
  for(int i=0;i<n;i++)
  {
  	cin >> D[i];
  }
  
  int sum = D[0];
  
  for(int i=0;i<n;i++)
  {
   D[i] = max(D[i-1], 0) + D[i];
  }
  
  for(int i=0;i<n;i++)
  {
  	if(sum < D[i])
  	sum = D[i];
  }
  
  cout << sum;
  
}
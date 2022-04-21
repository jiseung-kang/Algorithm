#include<stdio.h>

#ifndef min
#define min(a,b)  (((a) < (b)) ? (a) : (b))
#endif

	int n;
	int D[1000005];

int main()
{		
	scanf("%d", &n);
	
	D[1] = 0;

	for(int i=2;i<=n;i++)
	{
	     D[i] = D[i-1]+1;
    	 if(i%2 == 0) D[i] = min(D[i],D[i/2]+1);
	     if(i%3 == 0) D[i] = min(D[i],D[i/3]+1);
	}
	
	printf("%d", D[n]);
		
    return 0;
}
#include <emscripten.h>
EMSCRIPTEN_KEEPALIVE
int add(int a, int b)
{
	return a + b;
}

EMSCRIPTEN_KEEPALIVE
int sub(int a, int b)
{
	return a - b;
}

EMSCRIPTEN_KEEPALIVE
int mul(int a, int b)
{
	return a * b;
}
EMSCRIPTEN_KEEPALIVE
int divise(int a, int b)
{
	return  a / b;
}

EMSCRIPTEN_KEEPALIVE
int mod(int a, int b)
{
	return a % b;
}

EMSCRIPTEN_KEEPALIVE
int sum(int *a, int l)
{
	int s = 0;
	for(int i=0; i < l; ++i){
		s += a[i];
	}
	return s;
}

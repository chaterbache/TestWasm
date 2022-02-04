#include <emscripten.h>
EMSCRIPTEN_KEEPALIVE
int add(int a, int b, int c)
{
	return a + b * c;
}

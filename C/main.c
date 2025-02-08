#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;  // Pointer to the address of `num`

    char *s = "Hi";

    printf("Address of num: %p\n", ptr);  // Memory address of `num`
    printf("Value of num: %d\n", *ptr);  // Dereference pointer to get value

    printf("&s: %p\n", &s);    // Address of the pointer variable s (the pointer stores the address of the string)
    printf("s: %p\n", s);      // Address of the first character ('H')
    printf("&s[0]: %p\n", &s[0]); // Same as s, address of the first character ('H')

    return 0;
}

// compile: clang main.c -o main
// run: ./main
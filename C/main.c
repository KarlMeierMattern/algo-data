#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;  // Pointer to the address of `num`

    char *s = "Hi"; // s is a pointer to the first character of the string "Hi",

    printf("Address of the pointer: %p\n", &ptr); // Address of the pointer - memory location where the pointer variable ptr is stored.
    printf("Address of num: %p\n", ptr); // Memory address of `num`
    printf("Value of num: %d\n", *ptr); // Dereference pointer to get value

    printf("&s: address of pointer: %p\n", &s); // Address of the pointer variable s (the pointer stores the address of the string)
    printf("s: address of string: %p\n", s); // Address of the first character ('H')
    printf("&s[0]: address of string: %p\n", &s[0]); // Same as s, address of the first character ('H')
    printf("*s: dereferenced string: %c\n", *s); // Dereference the pointer and shows value stored at the address that s points to.
    printf("s[0]: dereferenced string: %c\n", s[0]); // Same as *s

    return 0;
}

// compile: clang main.c -o main
// run: ./main
#include <stdio.h>
#include <string.h>

int main(int argc, char **argv) {
  if (argc < 2) {
    printf("Give me a palindrome to check!\n");
    return 1;
  }
  const char *palindrome = argv[1];
  int charsPerHalf = strlen(palindrome) / 2;
  for (int i = 0; i < charsPerHalf; i++) {
    if (palindrome[i] != palindrome[strlen(palindrome) - i - 1]) {
      printf("It is not a palindrome!\n");
      return -1;
    }
  }
  printf("It is a palindrome!\n");
  return 0;
}

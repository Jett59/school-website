#include <stdio.h>

int main() {
  for (int i = 0; i < 20; i++) {
    if (i % 15 == 0) {
      puts("Fizzbuzz");
    } else if (i % 3 == 0) {
      puts("Fizz");
    } else if (i % 5 == 0) {
      puts("Buzz");
    } else {
      printf("%d\n", i);
    }
  }
  return 0;
}

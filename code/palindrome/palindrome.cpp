#include <iostream>
#include <string>

using std::cout;
using std::endl;
using std::string;

int main(int argc, char **argv) {
  if (argc < 2) {
    cout << "Give me a palindrome to check!" << endl;
    return 1;
  }
  const string palindrome = argv[1];
  int charsPerHalf = palindrome.length() / 2;
  for (int i = 0; i < charsPerHalf; i++) {
    if (palindrome[i] != palindrome[palindrome.length() - i - 1]) {
      cout << "It is not a palindrome!" << endl;
      return -1;
    }
  }
  cout << "It is a palindrome!" << endl;
  return 0;
}

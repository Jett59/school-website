if (process.argv.length < 3) {
    console.log("Give me a palindrome to check");
    process.exit(1);
}
        let palindrome = process.argv[2];
        let charsPerHalf = palindrome.length / 2;
for (var i = 0; i < charsPerHalf; i++) {
    if (palindrome.charAt(i) != palindrome.charAt(palindrome.length - i - 1)) {
        console.log("It is not a palindrome!");
        process.exit(-1);
    }
}
console.log("It is a palindrome!");
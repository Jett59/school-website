public class Palindrome {
    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("Give me a palindrome to check");
            System.exit(1);
        }
        String palindrome = args[0];
        int charsPerHalf = palindrome.length() / 2;
        for (int i = 0; i < charsPerHalf; i++) {
            if (palindrome.charAt(i) != palindrome.charAt(palindrome.length() - i - 1)) {
                System.out.println("It is not a palindrome!");
                System.exit(-1);
            }
        }
        System.out.println("It is a palindrome!");
    }
}

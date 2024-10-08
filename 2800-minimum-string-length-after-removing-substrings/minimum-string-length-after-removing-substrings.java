class Solution {
    public int minLength(String s) {
        int n = s.length(), p = -1;
        char[] stack = new char[n];
        for (char c : s.toCharArray()) {
            if (p >= 0 && ((c == 'B' && stack[p] == 'A') || (c == 'D' && stack[p] == 'C'))) {
                p--;
            } else {
                stack[++p] = c;
            }
        }
        return p + 1;
    }
}
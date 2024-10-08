class Solution {
    public int minSwaps(String s) {
        int swap = 0;
        int notbla = 0;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '[') {
                notbla++;
            } else if (notbla > 0) {
                notbla--;
            }
        }
        swap = (notbla + 1) >> 1;
        return swap;
    }
}

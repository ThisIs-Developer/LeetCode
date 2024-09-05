class Solution {
    public int[] missingRolls(int[] r, int m, int n) {
        int c = r.length;
        int ts = m * (n + c);
        int os = 0;

        for (int roll : r) {
            os += roll;
        }

        int ms = ts - os;

        if (ms < n || ms > 6 * n) {
            return new int[0];
        }

        int b = ms / n;
        int rmd = ms % n;

        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            res[i] = b + (i < rmd ? 1 : 0);
        }

        return res;
    }
}

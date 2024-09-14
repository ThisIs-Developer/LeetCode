class Solution {
    public int longestSubarray(int[] N) {
        int[] ans = {N[0], 1};
        int cnt = 1;
        for (int i = 1; i < N.length; i++) {
            if (N[i - 1] == N[i]) {
                cnt++;
            } else {
                cnt = 1;
            }
            if (N[i] > ans[0]) {
                ans = new int[]{N[i], cnt};
            } else if (N[i] == ans[0]) {
                ans[1] = Math.max(ans[1], cnt);
            }
        }
        return ans[1];
    }
}
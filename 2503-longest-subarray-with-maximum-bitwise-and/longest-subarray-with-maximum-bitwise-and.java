class Solution {
    public int longestSubarray(int[] nums) {
        int[][] count = new int[32][2];
        int maxNum = nums[0];
        int len = 1;
        int cur = 1;
        for (int i = 1; i < nums.length; ++i) {
            if (nums[i] == nums[i-1]) {
                cur++;
            } else {
                cur = 1;
            }
            
            if (nums[i] > maxNum) {
                maxNum = nums[i];
                len = cur;
            } else if (nums[i] == maxNum) {
                len = Math.max(len, cur);
            }
            // System.out.println(" nums[i]: " + nums[i] + " cur: " + cur + " maxNum: " + maxNum + " len: " + len);
        }
        
        return len;
    }
}
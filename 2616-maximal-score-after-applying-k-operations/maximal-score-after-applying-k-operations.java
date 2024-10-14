class Solution {
    public long maxKelements(int[] nums, int k) {
        int n = nums.length;
        long curScore = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        for (int i = 0; i < n; i++) {
            pq.add(nums[i]);
        }

        for (int i = 0; i < k; i++) {
            int curMaxVal = pq.remove();
            // System.out.println(curMaxVal);
            curScore += curMaxVal;
            pq.add((int)Math.ceil((double)curMaxVal / 3));
            // System.out.println(pq);
        }

        return curScore;
    }
}
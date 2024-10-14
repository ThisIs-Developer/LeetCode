class Solution {
    public long maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> pq = buildPQ(nums);
        long ans = 0;
        while (k > 0) {
            int num = pq.poll();
            if (num == 1) break;
            ans += num;
            pq.add((num+2)/3);
            k--;
        }
        ans += k;

        return ans;
    }

    private PriorityQueue<Integer> buildPQ(int[] nums) {
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(Collections.reverseOrder());
        for (int num : nums) 
            pq.add(num);

        return pq;
    }

}
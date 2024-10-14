class Solution {
    public long maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for(int i=0;i<nums.length;i++){
            pq.add(nums[i]);
        }
        long ans = 0;
        while(k-->0){
            int num = pq.poll();
            int x = num%3==0?num/3:num/3+1;
            // System.out.println(num+" "+x);
            ans+=num;
            pq.add(x);
        }
        return ans;
    }
}
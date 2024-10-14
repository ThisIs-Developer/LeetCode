class Solution {
    public long maxKelements(int[] nums, int k) {
        long score=0;
        PriorityQueue<Integer> pq=new PriorityQueue<>(Collections.reverseOrder());
        for(int elem:nums){
            pq.offer(elem);
        }    
        while(k>0){
            int p=pq.poll();
            score+=(long)p;
            pq.add((int)Math.ceil(p/(double)3));
            k--;
        }
        return score;
    }
}
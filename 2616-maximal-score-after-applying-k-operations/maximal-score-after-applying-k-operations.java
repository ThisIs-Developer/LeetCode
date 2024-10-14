class Solution {
    public long maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> q=new PriorityQueue<>(Comparator.reverseOrder());
        for(int i=0;i<nums.length;i++){
            q.add(nums[i]);
        }
        long ans=0;
        while(k>0){
            int a=q.peek();
            ans+=a;
            int b=(int)Math.ceil(a/3.0);
            q.remove(a);
            q.add(b);
            k--;
        }
        return ans;
    }
}
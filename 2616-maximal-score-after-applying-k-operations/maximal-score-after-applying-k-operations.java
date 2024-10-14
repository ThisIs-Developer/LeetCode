class Solution {
    public long maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>((a,b) -> b - a);
        long ans = 0;
        int num;
        for(int ch : nums)
            heap.add(ch);
        while(k-- > 0){
            num = heap.poll();
            ans += num;
            if(num % 3 == 0)
                num /= 3;
            else num = num/3 + 1;
            heap.add(num);
        }
        return ans;
    }
}
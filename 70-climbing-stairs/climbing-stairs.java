class Solution {
    public int climbStairs(int n) {
        if(n==0||n==1){
            return 1;
        }
        //return climbStairs(n-1) + climbStairs(n-2); // time limit
        int prev=1, curr=1;
        for(int i=2;i<=n;i++){
            int temp=curr;
            curr=prev+curr;
            prev=temp;
        }
        return curr;
    }
}
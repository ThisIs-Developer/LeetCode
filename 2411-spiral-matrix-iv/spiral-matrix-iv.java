class Solution {
    public int[][] spiralMatrix(int m, int n, ListNode head) {
        int ans[][]=new int[m][];
        for(int i=0;i<m;i++){
            int res[]=new int[n];
            Arrays.fill(res,-1);
            ans[i]=res;
        }
        
        int rmin = 0;
        int rmax = m-1;
        int cmin = 0;
        int cmax = n-1;

       while(head!=null){
            
            for(int c=cmin;c<=cmax && head!=null;c++){
                ans[rmin][c] = head.val;
                head = head.next;
            }
            rmin++;
            for(int r=rmin;r<=rmax && head!=null;r++){
                ans[r][cmax] = head.val;
                head = head.next;
            }
            cmax--;
            for(int c=cmax;c>=cmin && head!=null;c--){
                ans[rmax][c] = head.val;
                head = head.next;
            }
            rmax--;

            for(int r=rmax;r>=rmin && head!=null;r--){
                ans[r][cmin] = head.val;
                head = head.next;
            }
            cmin++;
        } 
        return ans;
    }
}
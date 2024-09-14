class Solution {
    public int[] xorQueries(int[] arr, int[][] queries) {
        
        int ans[]= new int[queries.length];
        int ind=0;
        for(int[] arrr: queries){
             int xor = 0;
            int left = arrr[0];
            int right = arrr[1];
            for(int i=left; i<=right; i++){
                xor = xor ^ arr[i];

            }
            System.out.println(xor);
            ans[ind]=xor;
            ind++;

        }
         return ans;
    }

   
}
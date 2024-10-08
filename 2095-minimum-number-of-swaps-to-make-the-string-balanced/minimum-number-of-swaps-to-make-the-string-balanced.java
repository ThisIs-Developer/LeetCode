class Solution {
    public int minSwaps(String s) {
        
        char[] arr = s.toCharArray();
        int count =0;
        int max  =0 ;
        for(int i=0;i<arr.length;i++){
            char c = arr[i];
            if(c == ']'){
                count++;
                max = Math.max(count, max);
            }else{
                count--;
            }
        }
        return (max+1)/2;
    }
}
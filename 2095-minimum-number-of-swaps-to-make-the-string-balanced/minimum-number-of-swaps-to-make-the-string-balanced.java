class Solution {
    public int minSwaps(String s) {
        int tmp = 0;
        int res = 0;
        for(char a:s.toCharArray()){
            if(a==']'){
                tmp++;
            }else{
                tmp--;
            }
            res = Math.max(res,tmp);
        }
        return (res + 1)/2;
    }
}
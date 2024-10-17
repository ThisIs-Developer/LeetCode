class Solution {
    public int maximumSwap(int num) {
        char[] chs = (""+num).toCharArray();
        int res = num;
        for(int i=0;i<chs.length-1;i++) {
            int n = chs[i]-'0';
            int k = chs.length-1;
            // find the biggest digit and swap if > n
            for(int j=chs.length-2;j>i;j--) {
                if(chs[k]-'0'<chs[j]-'0') {
                    k=j;
                }
            }
            if(chs[k]-'0'>chs[i]-'0') {
                char[] chs1 = Arrays.copyOf(chs, chs.length);
                char c=chs1[k];
                chs1[k]=chs1[i];
                chs1[i]=c;
                res = Math.max(res,Integer.valueOf(new String(chs1)));
            }
        }
        return res;
    }
}
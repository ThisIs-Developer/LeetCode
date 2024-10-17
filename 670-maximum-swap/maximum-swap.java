class Solution {
    public int maximumSwap(int number) {
        int count[] = new int[10];
        int lastPos[] = new int[10];
        StringBuilder str = new StringBuilder();
        str.append(number);
        for(int i=0;i<str.length();i++) {
            count[str.charAt(i)-'0']++;
            lastPos[str.charAt(i)-'0'] = i;
        }
        int i = 0;
        for(int num=9;num>=0;num--) {
            while(count[num]>0) {
                if((str.charAt(i)-'0') == num) {
                    count[num]--;
                    i++;
                } else {
                    //System.out.println(num+" "+i+" "+lastPos[num]);
                    char currChar = str.charAt(i);
                    str.setCharAt(i, str.charAt(lastPos[num]));
                    str.setCharAt(lastPos[num], currChar);
                    num = -1;
                    break;
                }
            }
        }
        System.out.println(str);
        return new Integer(str.toString());
    }
}
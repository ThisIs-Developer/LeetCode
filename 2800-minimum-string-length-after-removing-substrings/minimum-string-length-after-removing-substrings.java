class Solution {
    public int minLength(String s) {
        String st=s;
        while(st.indexOf("AB")>=0 || st.indexOf("CD")>=0)
        {
            int idx=0;
            if(st.indexOf("AB")>=0){
            idx=st.indexOf("AB");
            }
            else if(st.indexOf("CD")>=0)
            {
                idx=st.indexOf("CD");
            }
            else
            {
                break;
            }
             if((idx+2)<=st.length()-1)
            st=st.substring(0,idx)+st.substring(idx+2);
            else
            {
             st=st.substring(0,idx);
            }
        }
        System.out.println(st);
        return st.length();
    }
}
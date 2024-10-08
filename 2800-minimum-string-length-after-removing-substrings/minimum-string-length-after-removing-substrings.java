class Solution {
    public int minLength(String s) {
        StringBuilder sb = new StringBuilder();
        for(char c:s.toCharArray()){
            if(c=='B' && sb.length()>0 && sb.charAt(sb.length()-1)=='A') sb.delete(sb.length()-1,sb.length());
            else if(c=='D' && sb.length()>0 && sb.charAt(sb.length()-1)=='C') sb.delete(sb.length()-1,sb.length());
            else sb.append(c);
        }
        return sb.length();
    }
}
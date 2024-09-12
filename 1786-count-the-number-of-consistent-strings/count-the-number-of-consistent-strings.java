class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
        HashSet<Character> set = new HashSet<>();
        for(int i=0;i<allowed.length();i++){
            set.add(allowed.charAt(i));
        }
        int count = 0;
        
        for(int i=0;i<words.length;i++){
            boolean notContains = false;;
            for(int j=0;j<words[i].length();j++){
                if(!set.contains(words[i].charAt(j))){
                    notContains = true;
                    break;
                }
            }
            if(!notContains){
                count++;
            }
        }
        return count;
    }
}
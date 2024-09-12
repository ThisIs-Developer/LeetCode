class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
                int cnt = words.length;
        int arr[] = new int[26];
        for(char c : allowed.toCharArray()){
            arr[c - 'a']++;
        }

        for(String s : words){
            for(char c : s.toCharArray()){
                if(arr[c-'a']<=0)
                {cnt--;
                break;}
            }
        }
        return cnt ;
    }
}
class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
        Set<Character> st = new HashSet<>();
        for (int x = 0; x < allowed.length(); x++) {
            st.add(allowed.charAt(x));
        }
        int c = 0;
        for (int i = 0; i < words.length; i++) {
            char arr[] = words[i].toCharArray();
            boolean flag = true;
            for (int j = 0; j < arr.length; j++) {
                if (!st.contains((arr[j])))
                    flag = false;
            }
            if (flag) {
                c++;
            }
        }
        return c;
    }
}
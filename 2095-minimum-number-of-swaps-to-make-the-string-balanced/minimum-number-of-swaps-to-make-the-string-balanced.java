class Solution {
    public int minSwaps(String str) {
        int count = 0;
        Stack<Character> s = new Stack();
        for (char ch : str.toCharArray()) {
            if (ch == '[') s.push(ch);
            else {
                if (!s.isEmpty()) s.pop();
                else count++;
            }
        }
        return (count+1)/2;
    }
}
class Solution {
    public int[][] spiralMatrix(int m, int n, ListNode head) {
        int colStart = 0, colEnd = n - 1, rowStart = 0, rowEnd = m - 1;
        int[][] res = new int[m][n];
        for(int i = 0; i < m; i++) {
            Arrays.fill(res[i], -1);
        }
        while(colStart <= rowEnd) {
            for(int i = colStart; i <= colEnd; i++) {
                if(head != null) {
                    res[rowStart][i] = head.val;
                    head = head.next;
                }   
            }
            for(int i = rowStart + 1; i <= rowEnd; i++) {
                if(head != null) {
                    res[i][colEnd] = head.val;
                    head = head.next;
                }
            }
            for(int i = colEnd - 1; i >= colStart; i--) {
                if(head != null) {
                    res[rowEnd][i] = head.val;
                    head = head.next;
                }
            }
            for(int i = rowEnd - 1; i >= rowStart + 1; i--) {
                if(head != null) {
                    res[i][colStart] = head.val;
                    head = head.next;
                }
            }
            if(head == null)
                break;
            colStart++; colEnd--; rowStart++; rowEnd--;
        }
        return res;
    }
}
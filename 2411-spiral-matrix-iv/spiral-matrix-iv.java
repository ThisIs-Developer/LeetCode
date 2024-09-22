class Solution {
    public int[][] spiralMatrix(int m, int n, ListNode head) {
        int[][] res = new int[m][n];

        for (int[] arr : res) {
            Arrays.fill(arr, -1);
        }
        

        int rowUp = 0, rowDown = m - 1, colLeft = 0, colRight = n - 1;

        while (rowUp <= rowDown && colLeft <= colRight) {

            for (int i = colLeft; i <= colRight; i++) {
                res[rowUp][i] = head == null ? -1 : head.val;
                head = head == null ? null : head.next;
            }
            rowUp++;

            if (rowUp > rowDown) {
                break;
            }

            for (int i = rowUp; i <= rowDown; i++) {
                res[i][colRight] = head == null ? -1 : head.val;
                head = head == null ? null : head.next;
            }
            colRight--;
            
            if (colLeft > colRight) {
                break;
            }

            for (int i = colRight; i >= colLeft; i--) {
                res[rowDown][i] = head == null ? -1 : head.val;
                head = head == null ? null : head.next;
            }
            rowDown--;

            if (rowUp > rowDown) {
                break;
            }

            for (int i = rowDown; i >= rowUp; i--) {
                res[i][colLeft] = head == null ? -1 : head.val;
                head = head == null ? null : head.next;
            }
            colLeft++;
            
            if (colLeft > colRight) {
                break;
            }

        }
        return res;
    }
}
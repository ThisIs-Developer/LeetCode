/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int[][] spiralMatrix(int m, int n, ListNode head) {
        int left = 0; int right = n;
        int top = 0; int bottom = m;

        int[][] result = new int[m][n];
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                result[i][j] = -1;
            }
        }

        while(head != null) {
            // 1. left to right
            for(int i = left; i < right; i++) {
                if(head == null)
                    return result;
                result[top][i] = head.val;
                head  = head.next;
            }
            top++;

            // 2. top to bottom
            for(int i = top; i < bottom; i++) {
                if(head == null)
                    return result;
                result[i][right - 1] = head.val;
                head  = head.next;
            }
            right--;

            // 3. right to left
            for(int i = right - 1; i >= left; i--) {
                if(head == null)
                    return result;
                result[bottom - 1][i] = head.val;
                head  = head.next;
            }
            bottom--;

            // 4. bottom to top
            for(int i = bottom - 1; i >= top; i--) {
                if(head == null)
                    return result;
                result[i][left] = head.val;
                head  = head.next;
            }
            left++;
        }
        return result;
    }
}
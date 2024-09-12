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
    // my code 
    // public void fillup(int[][] arr,int i,int j,ListNode head){
    //     if(head!=null){
    //         arr[i][j] = head.val;
    //     }
    //     else{
    //         arr[i][j] = -1;
    //     }
    // } 
    // public int[][] spiralMatrix(int m, int n, ListNode head) {
    //     int left =0;
    //     int right = n-1;
    //     int top =0;
    //     int bottom = m-1;
    //     int[][] result = new int[m][n];
    //     while(left<=right && top <=bottom){
           
    //         for(int j=left; j<=right;j++){
    //             fillup(result,top,j,head);
    //             if(head != null){
    //                 head = head.next;
    //             }
    //         }
    //         top++; 
    //         for(int i=top; i<=bottom;i++){
    //             fillup(result,i,right,head);
    //             if(head != null){
    //                 head = head.next;
    //             }
    //         } 
    //         right--;
    //         if (top <= bottom) {
    //         for(int j =right; j>=left;j--){
    //             fillup(result,bottom,j,head);
    //             if(head != null){
    //                 head = head.next;
    //             }
    //         } 
    //         bottom--;
    //         }
    //         if (left <= right) {
    //         for(int i=bottom; i>=top;i--){
    //             fillup(result,i,left,head);
    //             if(head != null){
    //                 head = head.next;
    //             }
    //         } 
    //         left++;
    //         }
    //     }
    //     return result; 
    
    // better code
    public int[][] spiralMatrix(int m, int n, ListNode head) {
        int left =0;
        int right = n-1;
        int top =0;
        int bottom = m-1;
        int[][] arr = new int[m][];
        for(int i=0; i<m;i++){
            arr[i] = new int[n];
            Arrays.fill(arr[i],-1);
        }
        while(head != null){
           
            for(int j=left; j<=right && head != null;j++){
                arr[top][j] = head.val;
                head = head.next;
            }
            top++; 
            for(int i=top; i<=bottom && head != null ;i++){
                arr[i][right] = head.val;
                head = head.next;
            } 
            right--;
            if (top <= bottom) {
            for(int j =right; j>=left && head != null;j--){
                arr[bottom][j] = head.val;
                head = head.next;
            } 
            bottom--;
            }
            if (left <= right) {
            for(int i=bottom; i>=top && head != null;i--){
                arr[i][left] = head.val;
                head = head.next;
            } 
            left++;
            }
        }
        return arr; 
    }
}
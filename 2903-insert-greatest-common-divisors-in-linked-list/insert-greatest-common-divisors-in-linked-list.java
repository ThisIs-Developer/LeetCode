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
    public ListNode insertGreatestCommonDivisors(ListNode head) {
        
        if(head.next == null) return head;

        ListNode node1 = head;
        ListNode node2 = head.next;

        while(node2 != null){

            int gcd = calculateGCD(node1. val, node2.val);
            ListNode gcdNode = new ListNode(gcd);

            node1.next = gcdNode;
            gcdNode.next = node2;

            node1 = node2;
            node2 = node2.next;

        }

        return head;

    }

    public int calculateGCD(int num1, int num2){

        while(num2 != 0){

            int temp = num2;
            num2 = num1 % num2;
            num1 = temp;

        }

        return num1;

    }

}
class Solution {
    public ListNode modifiedList(int[] nums, ListNode head) {
        final int MAX_VAL = 100000;
        boolean[] valuesToRemove = new boolean[MAX_VAL + 1];
        
        for (int num : nums) {
            valuesToRemove[num] = true;
        }

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode current = dummy;

        while (current.next != null) {
            if (valuesToRemove[current.next.val]) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return dummy.next;
    }
}

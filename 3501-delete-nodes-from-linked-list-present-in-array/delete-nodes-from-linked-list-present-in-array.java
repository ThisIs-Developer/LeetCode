class Solution {
    public ListNode modifiedList(int[] nums, ListNode head) {
        // Directly initialize HashSet with known size to avoid resizing
        Set<Integer> valuesToRemove = new HashSet<>(nums.length);
        for (int num : nums) {
            valuesToRemove.add(num);
        }

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode current = dummy;

        while (current.next != null) {
            if (valuesToRemove.contains(current.next.val)) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return dummy.next;
    }
}

class Solution {
    public int[][] spiralMatrix(int m, int n, ListNode head) {
        int[][] result = new int[m][n];
        List<Integer> aux = new ArrayList<>();
        String[] actions = { "Right", "Down", "Left", "Up" };
        int index = 0, i = 0, j = 0, actionsIter = 0, k = 0;
        int left = 0, right = n - 1, top = 0, bottom = m - 1;

        while (head != null) {
            aux.add(head.val);
            head = head.next;
        }

        for (i = 0; i < m; i++) {
            for (j = 0; j < n; j++) {
                result[i][j] = -1;
            }
        }

        i = 0;
        j = 0;

        while (k < aux.size()) {
            if (actions[actionsIter].equals("Right")) {
                for (j = left; j <= right && k < aux.size(); j++) {
                    result[top][j] = aux.get(k);
                    k++;
                }

                top++;
                actionsIter++;

            } else if (actions[actionsIter].equals("Down")) {
                for (i = top; i <= bottom && k < aux.size(); i++) {
                    result[i][right] = aux.get(k);
                    k++;
                }

                right--;
                actionsIter++;

            } else if (actions[actionsIter].equals("Left")) {
                for (j = right; j >= left && k < aux.size(); j--) {
                    result[bottom][j] = aux.get(k);
                    k++;
                }

                bottom--;
                actionsIter++;

            } else if (actions[actionsIter].equals("Up")) {
                for (i = bottom; i >= top && k < aux.size(); i--) {
                    result[i][left] = aux.get(k);
                    k++;
                }

                left++;
                actionsIter = 0;
            }
        }

        return result;
    }
}
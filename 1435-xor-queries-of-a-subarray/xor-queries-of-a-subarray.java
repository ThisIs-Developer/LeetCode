class Solution {
    public int[] xorQueries(int[] arr, int[][] queries) {
        int n = arr.length;
        int q = queries.length;
        int blockSize = (int) Math.sqrt(n);
        int[] answer = new int[q];
        
        Query[] qs = new Query[q];
        for (int i = 0; i < q; i++) {
            qs[i] = new Query(queries[i][0], queries[i][1], i);
        }
        
        Arrays.sort(qs, (a, b) -> {
            int blockA = a.left / blockSize;
            int blockB = b.left / blockSize;
            if (blockA != blockB) return blockA - blockB;
            return a.right - b.right;
        });
        
        int currentLeft = 0, currentRight = -1, currentXor = 0;
        
        for (Query query : qs) {
            while (currentRight < query.right) {
                currentRight++;
                currentXor ^= arr[currentRight];
            }
            while (currentRight > query.right) {
                currentXor ^= arr[currentRight];
                currentRight--;
            }
            while (currentLeft < query.left) {
                currentXor ^= arr[currentLeft];
                currentLeft++;
            }
            while (currentLeft > query.left) {
                currentLeft--;
                currentXor ^= arr[currentLeft];
            }
            answer[query.index] = currentXor;
        }
        
        return answer;
    }
    
    class Query {
        int left, right, index;
        Query(int l, int r, int i) {
            left = l;
            right = r;
            index = i;
        }
    }
}
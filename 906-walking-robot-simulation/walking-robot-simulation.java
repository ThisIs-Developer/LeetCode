public class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        // Store obstacles in a set for O(1) lookup
        Set<String> obs = new HashSet<>();
        for (int[] obstacle : obstacles) {
            obs.add(obstacle[0] + "," + obstacle[1]);
        }

        // Direction vectors for [N, E, S, W]
        int[][] directionVectors = {
            {0, 1},   // North -> +Y direction
            {1, 0},   // East -> +X direction
            {0, -1},  // South -> -Y direction
            {-1, 0}   // West -> -X direction
        };

        // Map for changing directions
        int[][] dirChangeMap = {
            {3, 1}, // N -> Left: W (index 3), Right: E (index 1)
            {0, 2}, // E -> Left: N (index 0), Right: S (index 2)
            {1, 3}, // S -> Left: E (index 1), Right: W (index 3)
            {2, 0}  // W -> Left: S (index 2), Right: N (index 0)
        };

        int currDirection = 0; // Start facing North
        int x = 0, y = 0;
        int maxDist = 0;

        for (int command : commands) {
            if (command > 0) {
                int dx = directionVectors[currDirection][0];
                int dy = directionVectors[currDirection][1];
                for (int i = 0; i < command; i++) {
                    int nextX = x + dx;
                    int nextY = y + dy;
                    if (obs.contains(nextX + "," + nextY)) {
                        break;
                    }
                    x = nextX;
                    y = nextY;
                }
                maxDist = Math.max(maxDist, x * x + y * y);
            } else {
                currDirection = dirChangeMap[currDirection][command == -1 ? 1 : 0];
            }
        }

        return maxDist;
    }
}
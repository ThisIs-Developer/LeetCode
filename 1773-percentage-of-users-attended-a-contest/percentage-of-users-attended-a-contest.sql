WITH TotalUsers AS (
    SELECT COUNT(DISTINCT user_id) AS total_users
    FROM Users
),
UserCounts AS (
    SELECT 
        contest_id,
        COUNT(DISTINCT user_id) AS user_count
    FROM Register
    GROUP BY contest_id
),
Percentage AS (
    SELECT 
        uc.contest_id,
        ROUND((uc.user_count * 100.0 / tu.total_users), 2) AS percentage
    FROM UserCounts uc
    CROSS JOIN TotalUsers tu
)
SELECT 
    contest_id,
    percentage
FROM Percentage
ORDER BY percentage DESC, contest_id ASC;
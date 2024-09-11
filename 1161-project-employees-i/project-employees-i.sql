# Write your MySQL query statement below
SELECT p.project_id, ROUND(SUM(experience_years)/COUNT(project_id),2) AS average_years

FROM Project p
LEFT JOIN Employee e
ON p.employee_id=e.employee_id
GROUP BY p.project_id
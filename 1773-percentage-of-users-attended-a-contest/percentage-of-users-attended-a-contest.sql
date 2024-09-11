# Write your MySQL query statement below
WITH TotalUsers AS (
    SELECT COUNT(*) AS total_users
    FROM Users
)

select r.contest_id,  round((count(distinct u.user_id)/tu.total_users)*100,2)
as percentage
from Users u
join TotalUsers tu
join Register r
on u.user_id=r.user_id
group by r.contest_id 
order by  percentage  desc, r.contest_id
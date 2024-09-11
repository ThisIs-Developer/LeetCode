# Write your MySQL query statement below
SELECT class
from courses
group by 1
having count(student) >= 5
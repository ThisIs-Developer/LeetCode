# Write your MySQL query statement below

Select query_name, round(sum(rating/position)/count(*), 2) as quality, round(avg(rating < 3)*100, 2) as poor_query_percentage from Queries where query_name is not null  group by query_name 
# Write your MySQL query statement below
SELECT qu1.query_name, qu2.quality, qu1.poor_query_percentage
FROM (
SELECT  q1.query_name, ROUND((COUNT(CASE WHEN q1.rating < 3 THEN 1 END)/q2.total_queries)*100, 2) AS poor_query_percentage
FROM queries as q1
LEFT JOIN(
SELECT query_name,  COUNT(*) as total_queries 
FROM queries 
GROUP BY query_name
) AS  q2 ON q1.query_name = q2.query_name
GROUP BY q1.query_name) AS qu1
JOIN(
SELECT query_name, ROUND(AVG(rating/position), 2) AS quality
FROM queries
GROUP BY query_name) AS qu2 ON qu1.query_name = qu2.query_name;
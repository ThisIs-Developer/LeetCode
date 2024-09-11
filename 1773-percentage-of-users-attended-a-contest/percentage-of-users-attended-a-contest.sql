SELECT contest_id, ROUND(COUNT(R.contest_id) * 100 / (SELECT COUNT(*) 
FROM Users), 2)  percentage  FROM  Register R  GROUP BY contest_id 
ORDER BY percentage DESC, contest_id
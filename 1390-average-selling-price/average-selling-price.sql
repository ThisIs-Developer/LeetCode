# Write your MySQL query statement below
SELECT a.product_id, IFNULL(ROUND(SUM(a.price * b.units) / SUM(b.units), 2), 0) as average_price
FROM Prices as a
LEFT JOIN UnitsSold as b
ON a.product_id = b.product_id AND b.purchase_date >= a.start_date AND b.purchase_date <= a.end_date
GROUP BY a.product_id
ORDER BY a.product_id, a.start_date
# Write your MySQL query statement below
select product_name, year, price 
from Sales 
left join Product on Product.product_id = Sales.product_id;
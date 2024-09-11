# Write your MySQL query statement below
select p.product_id,ifnull(round(sum(price*units)/sum(units),2),0) as average_price
from prices as p 
left join unitssold as u
on p.product_id = u.product_id
and purchase_date between start_date and end_date
group by p.product_id
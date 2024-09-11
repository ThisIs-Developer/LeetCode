# Write your MySQL query statement below
SELECT P.PRODUCT_ID, IFNULL(ROUND(SUM(P.PRICE*U.UNITS)/SUM(U.UNITS),2),0) AVERAGE_PRICE
FROM PRICES P
LEFT JOIN UNITSSOLD U
ON P.PRODUCT_ID = U.PRODUCT_ID AND U.PURCHASE_DATE BETWEEN P.START_DATE AND P.END_DATE
GROUP BY 1
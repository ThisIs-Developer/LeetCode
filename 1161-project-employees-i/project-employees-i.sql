select project_id ,round (avg(experience_years) , 2) as average_years 
from project
join  employee 
on
employee.employee_id = project.employee_id
group by project_id 
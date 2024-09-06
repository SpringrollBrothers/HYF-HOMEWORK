insert into task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Shower', 'wash myself with 40 degree water', '2024-09-04','2024-09-07','2024-09-05',3,2);
--2. Change the title of a task
update task set title='洗澡' where id =36 ;
--3.Change a task due date
update task set due_date = '2024-09-06'where id = 36;
--4. Change a task status 
update task set status_id = 2 where id = 36;

--5. Mark a task as complete
update task set status_id = 3 where status_id != 3;
ROLLBACK;
--(i made a mistake, changed all the status_id, and i dont know how to reverse to previous status)
--6. Delete a task
DELETE from task where title = '洗澡';


--PART2 
create DATABASE School;
use School;
create table class(
    id int AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(10)not null UNIQUE,
begins DATE,
ends date
);

create table student(
id int PRIMARY key AUTO_INCREMENT,
name VARCHAR(10) not null UNIQUE,
email VARCHAR(20),
phone BIGINT,
class_id INT
);
alter table student add constraint fk_student_class_id FOREIGN key (class_id)REFERENCES class(id);

--part3 

-- 1.Get all the tasks assigned to users whose email ends in @spotify.com
select task.title, user.name from task join user on user.email like '%@spotify.com';
--2.Get all the tasks for 'Donald Duck' with status 'Not started'
select 
task.title,
user.name,
task.status_id 
from task 
JOIN 
user on task.user_id = user.id
join 
status on task.status_id = status.id
where 
user.name = 'Donald Duck' AND
status.name = 'Not Started';
--3.Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT 
task.title,
user.name,
task.created
from task 
join user on user.name='Maryrose Meadows'
where  month(task.created)=9;
--4.Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/
select month(task.created),count(*)
from task
GROUP BY month(task.created);
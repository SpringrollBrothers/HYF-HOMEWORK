SELECT * FROM task;



--1.Find out how many tasks are in the task table
select count(*) as total_task from task;
--2.Find out how many tasks in the task table do not have a valid due date
select * from task where due_date IS NULL;
--3.Find all the tasks that are marked as done
SELECT title FROM task WHERE status_id = 3;
--4.Find all the tasks that are not marked as done
select title from task where status_id != 3;
--5.Get all the tasks, sorted with the most recently created first
SELECT created FROM task ORDER BY created DESC;
--6.Get the single most recently created task
select created from task order by created desc limit 1;
--7.Get the title and due date of all tasks where the title or description contains database
select title,due_date FROM task where title like '%database%'or DESCRIPTION like '%DATABASE%';
--8.Get the title and status (as text) of all tasks
select task.title, status.name from task inner join status on status_id = status.id;

--9.Get the name of each status, along with a count of how many tasks have that status
select count(*), status.name from task join status on task.status_id = status.id GROUP BY status.name;
--10.Get the names of all statuses, sorted by the status with most tasks first
select status.name,count(*)AS task_count from task join status on task.status_id= status.id GROUP BY status.name ORDER BY TASK_COUNT DESC;
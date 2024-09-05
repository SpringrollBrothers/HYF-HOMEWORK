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
creatE table class(
    id int PRIMARY KEY,
    name VARCHAR(255),
    beginsdate DATE,
    endsdate DATE
);
CREATE TABLE STUDENT(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(255),
    EMAIL VARCHAR(255),
    PHONE BIGINT,
    CLASS_ID INT,
    Foreign Key (CLASS_ID) REFERENCES class(id)
);

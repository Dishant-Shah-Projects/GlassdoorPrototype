-- Procedure for user signup check
drop procedure  if exists existingEmail;
DELIMITER $$
CREATE PROCEDURE `existingEmail` (IN _EmailID varchar(60))
BEGIN
declare exit handler for sqlexception rollback;
start transaction;
SELECT * FROM SIGNUP 
WHERE UserName =  _EmailID;
commit;
END$$
DELIMITER ;GENERAL_REVIEW

-- Procedure to insert users in the SIGNUP table
drop procedure  if exists userInsert;
DELIMITER $$
CREATE PROCEDURE `userInsert` (IN _UserName varchar(60), IN _Password varchar(150) , IN _Role enum('student','company','admin'))
BEGIN
declare exit handler for sqlexception rollback;
start transaction;
INSERT INTO SIGNUP (UserName, Password, Role) 
VALUES (_UserName,_Password, _Role);
SELECT LAST_INSERT_ID() AS ID;
commit;
END$$
DELIMITER ;
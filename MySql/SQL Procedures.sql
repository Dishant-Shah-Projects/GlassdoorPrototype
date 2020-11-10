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

-- Procedure to submit job application
drop procedure  if exists applicationSubmit;
DELIMITER $$
CREATE PROCEDURE `applicationSubmit` (IN _JobID bigint, IN _StudentID bigint , IN _StudentName varchar(45),
IN _ResumeURL varchar(150), _CoverLetterURL varchar(150), _Status enum('Submitted','Reviewed','Initial Screening','Interviewing','Hired','Rejected'))
BEGIN
declare exit handler for sqlexception rollback;
start transaction;
INSERT INTO APPLICATION_RECEIVED (JobID, StudentID, StudentName, ResumeURL, CoverLetterURL, Status, Withdrawn) 
VALUES (_JobID, _StudentID, _StudentName, _ResumeURL, _CoverLetterURL, _Status, 0);
commit;
END$$
DELIMITER ;
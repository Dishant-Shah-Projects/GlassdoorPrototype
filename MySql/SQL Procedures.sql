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
DELIMITER ;

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

-- Procedure to add jobs in the APPILCATION_JOB table
drop procedure  if exists jobInsert;
DELIMITER $$
CREATE PROCEDURE `jobInsert` (IN _CompanyName varchar(60), IN _CompanyID bigint , IN _PostedDate date,IN _StreetAddress varchar(45),IN _City varchar(45),IN _State varchar(45))
BEGIN
declare exit handler for sqlexception rollback;
start transaction;
INSERT INTO APPLICATION_JOB (CompanyName, CompanyID, PostedDate,StreetAddress,City,State) 
VALUES (_CompanyName,_CompanyID, _PostedDate,_StreetAddress,_City,_State);
SELECT LAST_INSERT_ID() AS JobID;
commit;
END$$
DELIMITER ;

drop procedure  if exists fetchReview;
DELIMITER $$
CREATE PROCEDURE `fetchReview` (IN _ID bigint)
BEGIN
declare exit handler for sqlexception rollback;
start transaction;
SELECT * FROM GENERAL_REVIEW 
WHERE CompanyID =  _ID AND Status='Approved';
commit;
END$$
DELIMITER ;

-- Procedure for withdrawing application
drop procedure  if exists applicationWithDraw;
DELIMITER $$
CREATE PROCEDURE `applicationWithDraw` (IN _JobID bigint, IN _StudentID bigint)
BEGIN
declare exit handler for sqlexception rollback;
start transaction;
UPDATE APPLICATION_RECEIVED
SET Withdrawn = 1
WHERE JobID = _JobID AND StudentID =_StudentID;
commit;
END$$
DELIMITER ;

-- Procedure to add jobs in the APPILCATION_JOB table
drop procedure  if exists reviewInsert;
DELIMITER $$
CREATE PROCEDURE `reviewInsert` (IN _CompanyID bigint,IN _StudentID bigint,IN _CompanyName varchar(60), IN _Pros varchar(150), IN _Cons varchar(150),IN _Descriptions varchar(300),IN _Rating int, IN _EmployeeStatus enum('Current','Former'),IN _Status enum('NotApproved','Approved','Disapproved'),IN _Helpful bigint,IN _CEOApproval tinyint,IN _JobType enum('FullTime','PartTime','Contract','Intern','Freelance'),IN _Recommended tinyint, IN _JobTitle varchar(45), IN _Headline varchar(80),IN _DatePosted date, IN _Response varchar(300), In _Favorite tinyint )
BEGIN
declare exit handler for sqlexception rollback;
start transaction;
INSERT INTO GENERAL_REVIEW (CompanyID, StudentID, CompanyName,Pros,Cons,Descriptions,Rating,EmployeeStatus,Status,Helpful,CEOApproval,JobType,Recommended,JobTitle,Headline,DatePosted,Response,Favorite)
VALUES (_CompanyID, _StudentID, _CompanyName,_Pros,_Cons,_Descriptions,_Rating,_EmployeeStatus,_Status,_Helpful,_CEOApproval,_JobType,_Recommended,_JobTitle,_Headline,_DatePosted,_Response,_Favorite);
SELECT LAST_INSERT_ID() AS ID;
commit;
END$$
DELIMITER ;

-- Procedure for get job spplications
drop procedure  if exists getApplications;
DELIMITER $$
CREATE PROCEDURE `getApplications` (IN _JobID bigint, IN _limit int, IN _offset int)
BEGIN
declare exit handler for sqlexception rollback;
start transaction;
SELECT JobID, StudentID, StudentName, ResumeURL, CoverLetterURL, Status 
FROM APPLICATION_RECEIVED 
WHERE Withdrawn = 0 AND JObID = _JobID
LIMIT _limit OFFSET _offset;

SELECT COUNT(*) As TotalCount
FROM APPLICATION_RECEIVED 
WHERE Withdrawn = 0 AND JObID = _JobID;
commit;
END$$
DELIMITER ;




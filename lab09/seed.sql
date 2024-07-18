INSERT INTO User VALUES ('Ahsoka', 1, 2 );
INSERT INTO User VALUES ('Anakin', 2, 1 );
INSERT INTO User VALUES ('Obiwan', 3, 4 );

SELECT * FROM User;

INSERT INTO ScoreBoard VALUES ('ahsoka');
INSERT INTO ScoreBoard VALUES ('anakin');
INSERT INTO ScoreBoard VALUES ('obiwan');

SELECT * FROM ScoreBoard;
SELECT * FROM ScoreBoard WHERE user_name = 'ahsoka';

SELECT attempts from  ScoreBoard
JOIN User
ON ScoreBoard.user_name = User.nick_name
AND User.nick_name = 'ahsoka';
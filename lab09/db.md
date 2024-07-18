# Lab09

------

In our game Wordle, we decide to record each player's attempt number and attempts for each round. The attempt number means the round number, and attempts emans how many attempt the player used to answer correctly. We have two tables, below are the 2 schemas:

```sql
User(nick_name, attempt_number, attempts)

ScoreBoard(user_name)
```

<u>You can check the **ER model** at the csi3140.pdf.</u>

## SQL DDL

Below are the DDL for creating the tables

```sql
CREATE TABLE User(
    nick_name VARCHAR(20) DEFAULT '',
    attempt_number INT(100) DEFAULT NULL,
    attempts  INT(100) DEFAULT NULL,
    PRIMARY KEY (nick_name)

)ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE ScoreBoard (
    user_name VARCHAR(20) DEFAULT '',
    PRIMARY KEY (user_name),
    FOREIGN KEY (user_name) REFERENCES User(nick_name)
) ENGINE=INNODB DEFAULT CHARSET=utf8;
```

## SQL DML

Below are some sample DML for tetsing the tables:

```sql
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
# Should show only '2'
AND User.nick_name = 'ahsoka'; 
```


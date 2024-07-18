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
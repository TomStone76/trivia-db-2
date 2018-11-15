CREATE DATABASE trivia_db;

USE trivia_db;

CREATE TABLE questions (
    id INTEGER AUTO_INCREMENT,
    question_text VARCHAR(100) NOT NULL,
    answer_key BOOLEAN NOT NULL,
    PRIMARY KEY id
);

CREATE TABLE users (
    user_id INTEGER AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    hatch VARCHAR(100) NOT NULL,
    correct INTEGER NOT NULL,
    incorrect INTEGER NOT NULL
);

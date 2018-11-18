USE qanda_db;

INSERT INTO Questions(question_text, answer_key)
VALUES ("Paris is the capital of France.", true);

INSERT INTO Questions(question_text, answer_key)
VALUES ("Cats are canines.", false);

INSERT INTO Questions(question_text, answer_key)
VALUES ("Dogs are felines.", false);

INSERT INTO Questions(question_text, answer_key)
VALUES ("China has the largest population of any country.", true);

INSERT INTO Questions(question_text, answer_key)
VALUES ("JavaScript and Java are the same.", false);


INSERT INTO Users(user_id, username, hatch, correct, incorrect)
VALUES (1, Person1, abc123, 0, 0);

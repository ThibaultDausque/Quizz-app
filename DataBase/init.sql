CREATE DATABASE Database;

\c Database;

CREATE TABLE IF NOT EXISTS "questions" (
    id (int),
    question (text),
    choice 1 (text),
    response choice,
    difficulty (int),
    );

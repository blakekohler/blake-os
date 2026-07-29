-- Migration: Add user column to all tables
-- All existing data belongs to 'blake'

-- 1. checklist
ALTER TABLE checklist RENAME TO checklist_old;
CREATE TABLE checklist (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  task_index INTEGER NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user, date, task_index)
);
INSERT INTO checklist (user, date, task_index, done) SELECT 'blake', date, task_index, done FROM checklist_old;
DROP TABLE checklist_old;

-- 2. weight_log
ALTER TABLE weight_log RENAME TO weight_log_old;
CREATE TABLE weight_log (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  value REAL NOT NULL,
  PRIMARY KEY (user, date)
);
INSERT INTO weight_log (user, date, value) SELECT 'blake', date, value FROM weight_log_old;
DROP TABLE weight_log_old;

-- 3. prs
ALTER TABLE prs RENAME TO prs_old;
CREATE TABLE prs (
  user TEXT NOT NULL,
  exercise TEXT NOT NULL,
  weight REAL NOT NULL,
  reps INTEGER,
  date TEXT NOT NULL,
  PRIMARY KEY (user, exercise)
);
INSERT INTO prs (user, exercise, weight, reps, date) SELECT 'blake', exercise, weight, reps, date FROM prs_old;
DROP TABLE prs_old;

-- 4. pr_history
ALTER TABLE pr_history RENAME TO pr_history_old;
CREATE TABLE pr_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user TEXT NOT NULL,
  exercise TEXT NOT NULL,
  weight REAL NOT NULL,
  reps INTEGER,
  date TEXT NOT NULL
);
INSERT INTO pr_history (id, user, exercise, weight, reps, date) SELECT id, 'blake', exercise, weight, reps, date FROM pr_history_old;
DROP TABLE pr_history_old;

-- 5. notes
ALTER TABLE notes RENAME TO notes_old;
CREATE TABLE notes (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  PRIMARY KEY (user, date)
);
INSERT INTO notes (user, date, content) SELECT 'blake', date, content FROM notes_old;
DROP TABLE notes_old;

-- 6. tracker
ALTER TABLE tracker RENAME TO tracker_old;
CREATE TABLE tracker (
  user TEXT NOT NULL,
  month INTEGER NOT NULL,
  day INTEGER NOT NULL,
  checked INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (user, month, day)
);
INSERT INTO tracker (user, month, day, checked) SELECT 'blake', month, day, checked FROM tracker_old;
DROP TABLE tracker_old;

-- 7. wins
ALTER TABLE wins RENAME TO wins_old;
CREATE TABLE wins (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  win_index INTEGER NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user, date, win_index)
);
INSERT INTO wins (user, date, win_index, done) SELECT 'blake', date, win_index, done FROM wins_old;
DROP TABLE wins_old;

-- 8. lift_sessions
ALTER TABLE lift_sessions RENAME TO lift_sessions_old;
CREATE TABLE lift_sessions (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  PRIMARY KEY (user, date)
);
INSERT INTO lift_sessions (user, date) SELECT 'blake', date FROM lift_sessions_old;
DROP TABLE lift_sessions_old;

-- 9. swim_sessions
ALTER TABLE swim_sessions RENAME TO swim_sessions_old;
CREATE TABLE swim_sessions (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  summary TEXT,
  image_keys TEXT DEFAULT '[]',
  PRIMARY KEY (user, date)
);
INSERT INTO swim_sessions (user, date, summary, image_keys) SELECT 'blake', date, summary, image_keys FROM swim_sessions_old;
DROP TABLE swim_sessions_old;

-- Drop removed food tracking tables
DROP TABLE IF EXISTS meals;
DROP TABLE IF EXISTS favorite_meals;
DROP TABLE IF EXISTS fasts;
DROP TABLE IF EXISTS fast_intentions;

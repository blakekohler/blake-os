-- Checklist: stores daily task completion state
CREATE TABLE IF NOT EXISTS checklist (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  task_index INTEGER NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user, date, task_index)
);

-- Weight log
CREATE TABLE IF NOT EXISTS weight_log (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  value REAL NOT NULL,
  PRIMARY KEY (user, date)
);

-- PRs: current best per exercise
CREATE TABLE IF NOT EXISTS prs (
  user TEXT NOT NULL,
  exercise TEXT NOT NULL,
  weight REAL NOT NULL,
  reps INTEGER,
  date TEXT NOT NULL,
  PRIMARY KEY (user, exercise)
);

-- PR history: all PR attempts
CREATE TABLE IF NOT EXISTS pr_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user TEXT NOT NULL,
  exercise TEXT NOT NULL,
  weight REAL NOT NULL,
  reps INTEGER,
  date TEXT NOT NULL
);

-- Daily notes
CREATE TABLE IF NOT EXISTS notes (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  PRIMARY KEY (user, date)
);

-- 365 tracker: checked days
CREATE TABLE IF NOT EXISTS tracker (
  user TEXT NOT NULL,
  month INTEGER NOT NULL,
  day INTEGER NOT NULL,
  checked INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (user, month, day)
);

-- Daily wins
CREATE TABLE IF NOT EXISTS wins (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  win_index INTEGER NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user, date, win_index)
);

-- Lift sessions: dates when user lifted (for streak tracking)
CREATE TABLE IF NOT EXISTS lift_sessions (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  PRIMARY KEY (user, date)
);

-- Swim sessions
CREATE TABLE IF NOT EXISTS swim_sessions (
  user TEXT NOT NULL,
  date TEXT NOT NULL,
  summary TEXT,
  image_keys TEXT DEFAULT '[]',
  PRIMARY KEY (user, date)
);

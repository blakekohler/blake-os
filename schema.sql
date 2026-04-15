-- Checklist: stores daily task completion state
CREATE TABLE IF NOT EXISTS checklist (
  date TEXT NOT NULL,
  task_index INTEGER NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (date, task_index)
);

-- Weight log
CREATE TABLE IF NOT EXISTS weight_log (
  date TEXT PRIMARY KEY,
  value REAL NOT NULL
);

-- PRs: current best per exercise
CREATE TABLE IF NOT EXISTS prs (
  exercise TEXT PRIMARY KEY,
  weight REAL NOT NULL,
  reps INTEGER,
  date TEXT NOT NULL
);

-- PR history: all PR attempts
CREATE TABLE IF NOT EXISTS pr_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  exercise TEXT NOT NULL,
  weight REAL NOT NULL,
  reps INTEGER,
  date TEXT NOT NULL
);

-- Daily notes
CREATE TABLE IF NOT EXISTS notes (
  date TEXT PRIMARY KEY,
  content TEXT NOT NULL DEFAULT ''
);

-- 365 tracker: checked days
CREATE TABLE IF NOT EXISTS tracker (
  month INTEGER NOT NULL,
  day INTEGER NOT NULL,
  checked INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (month, day)
);

-- Daily wins
CREATE TABLE IF NOT EXISTS wins (
  date TEXT NOT NULL,
  win_index INTEGER NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (date, win_index)
);

-- Lift sessions: dates when user lifted (for streak tracking)
CREATE TABLE IF NOT EXISTS lift_sessions (
  date TEXT PRIMARY KEY
);

-- Swim sessions
CREATE TABLE IF NOT EXISTS swim_sessions (
  date TEXT PRIMARY KEY,
  summary TEXT,
  image_keys TEXT DEFAULT '[]'
);

-- Meals
CREATE TABLE IF NOT EXISTS meals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  name TEXT NOT NULL,
  calories INTEGER NOT NULL DEFAULT 0,
  protein INTEGER NOT NULL DEFAULT 0,
  carbs INTEGER NOT NULL DEFAULT 0,
  fat INTEGER NOT NULL DEFAULT 0
);

-- Favorite meals
CREATE TABLE IF NOT EXISTS favorite_meals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  calories INTEGER NOT NULL DEFAULT 0,
  protein INTEGER NOT NULL DEFAULT 0,
  carbs INTEGER NOT NULL DEFAULT 0,
  fat INTEGER NOT NULL DEFAULT 0
);

-- Fasts
CREATE TABLE IF NOT EXISTS fasts (
  date TEXT PRIMARY KEY
);

-- Fast intentions
CREATE TABLE IF NOT EXISTS fast_intentions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  text TEXT NOT NULL
);

-- Migration: record which workout day (push/pull/legs/...) each lift session was
ALTER TABLE lift_sessions ADD COLUMN workout_day TEXT;

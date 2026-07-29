// GET /api/lift-sessions — all sessions with which workout day was done
export async function onRequestGet(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT date, workout_day FROM lift_sessions WHERE user = ? ORDER BY date`
  ).bind(user).all();
  return Response.json(results);
}

// POST /api/lift-sessions — log a session day { date, workout_day }
export async function onRequestPost(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { date, workout_day } = await context.request.json();
  await db.prepare(
    `INSERT INTO lift_sessions (user, date, workout_day) VALUES (?, ?, ?)
     ON CONFLICT(user, date) DO UPDATE SET workout_day = COALESCE(excluded.workout_day, lift_sessions.workout_day)`
  ).bind(user, date, workout_day || null).run();
  return Response.json({ ok: true });
}

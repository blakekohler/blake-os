// GET /api/lift-sessions — all session dates
export async function onRequestGet(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT date FROM lift_sessions WHERE user = ? ORDER BY date`
  ).bind(user).all();
  return Response.json(results.map(r => r.date));
}

// POST /api/lift-sessions — log a session day { date }
export async function onRequestPost(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { date } = await context.request.json();
  await db.prepare(
    `INSERT OR IGNORE INTO lift_sessions (user, date) VALUES (?, ?)`
  ).bind(user, date).run();
  return Response.json({ ok: true });
}

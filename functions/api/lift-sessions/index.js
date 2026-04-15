// GET /api/lift-sessions — all session dates
export async function onRequestGet(context) {
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT date FROM lift_sessions ORDER BY date`
  ).all();
  return Response.json(results.map(r => r.date));
}

// POST /api/lift-sessions — log a session day { date }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { date } = await context.request.json();
  await db.prepare(
    `INSERT OR IGNORE INTO lift_sessions (date) VALUES (?)`
  ).bind(date).run();
  return Response.json({ ok: true });
}

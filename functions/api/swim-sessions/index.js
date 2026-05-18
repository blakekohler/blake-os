// GET /api/swim-sessions — all sessions
export async function onRequestGet(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT date, summary, image_keys FROM swim_sessions WHERE user = ? ORDER BY date DESC`
  ).bind(user).all();
  return Response.json(results);
}

// POST /api/swim-sessions — save session { date, summary, image_keys }
export async function onRequestPost(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { date, summary, image_keys } = await context.request.json();
  await db.prepare(
    `INSERT OR REPLACE INTO swim_sessions (user, date, summary, image_keys) VALUES (?, ?, ?, ?)`
  ).bind(user, date, summary || '', JSON.stringify(image_keys || [])).run();
  return Response.json({ ok: true });
}

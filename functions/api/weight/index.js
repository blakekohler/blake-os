// GET /api/weight — all weight entries
export async function onRequestGet(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT date, value FROM weight_log WHERE user = ? ORDER BY date DESC`
  ).bind(user).all();
  const log = {};
  for (const row of results) {
    log[row.date] = row.value;
  }
  return Response.json(log);
}

// POST /api/weight — save a weight entry { date, value }
export async function onRequestPost(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { date, value } = await context.request.json();
  await db.prepare(
    `INSERT OR REPLACE INTO weight_log (user, date, value) VALUES (?, ?, ?)`
  ).bind(user, date, value).run();
  return Response.json({ ok: true });
}

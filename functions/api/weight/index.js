// GET /api/weight — all weight entries
export async function onRequestGet(context) {
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT date, value FROM weight_log ORDER BY date DESC`
  ).all();
  const log = {};
  for (const row of results) {
    log[row.date] = row.value;
  }
  return Response.json(log);
}

// POST /api/weight — save a weight entry { date, value }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { date, value } = await context.request.json();
  await db.prepare(
    `INSERT OR REPLACE INTO weight_log (date, value) VALUES (?, ?)`
  ).bind(date, value).run();
  return Response.json({ ok: true });
}

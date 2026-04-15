// GET /api/fasts/:date — fast + intentions for date
export async function onRequestGet(context) {
  const db = context.env.DB;
  const date = context.params.date;
  const fast = await db.prepare(`SELECT date FROM fasts WHERE date = ?`).bind(date).first();
  if (!fast) return Response.json({ date, exists: false, intentions: [] });
  const { results } = await db.prepare(
    `SELECT id, text FROM fast_intentions WHERE date = ? ORDER BY id`
  ).bind(date).all();
  return Response.json({ date, exists: true, intentions: results });
}

// POST /api/fasts/:date — add intention { text }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const date = context.params.date;
  const { text } = await context.request.json();
  await db.prepare(`INSERT OR IGNORE INTO fasts (date) VALUES (?)`).bind(date).run();
  const { meta } = await db.prepare(
    `INSERT INTO fast_intentions (date, text) VALUES (?, ?)`
  ).bind(date, text).run();
  return Response.json({ ok: true, id: meta.last_row_id });
}

// DELETE /api/fasts/:date — delete fast + all intentions
export async function onRequestDelete(context) {
  const db = context.env.DB;
  const date = context.params.date;
  await db.prepare(`DELETE FROM fast_intentions WHERE date = ?`).bind(date).run();
  await db.prepare(`DELETE FROM fasts WHERE date = ?`).bind(date).run();
  return Response.json({ ok: true });
}

// GET /api/notes/:date
export async function onRequestGet(context) {
  const user = context.data.user;
  const date = context.params.date;
  const db = context.env.DB;
  const row = await db.prepare(
    `SELECT content FROM notes WHERE user = ? AND date = ?`
  ).bind(user, date).first();
  return Response.json({ content: row ? row.content : '' });
}

// POST /api/notes/:date
export async function onRequestPost(context) {
  const user = context.data.user;
  const date = context.params.date;
  const db = context.env.DB;
  const { content } = await context.request.json();
  await db.prepare(
    `INSERT OR REPLACE INTO notes (user, date, content) VALUES (?, ?, ?)`
  ).bind(user, date, content).run();
  return Response.json({ ok: true });
}

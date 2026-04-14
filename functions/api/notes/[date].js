// GET /api/notes/:date — get notes for a specific date
export async function onRequestGet(context) {
  const date = context.params.date;
  const db = context.env.DB;
  const row = await db.prepare(
    `SELECT content FROM notes WHERE date = ?`
  ).bind(date).first();
  return Response.json({ content: row ? row.content : '' });
}

// POST /api/notes/:date — save notes for a specific date
export async function onRequestPost(context) {
  const date = context.params.date;
  const db = context.env.DB;
  const { content } = await context.request.json();
  await db.prepare(
    `INSERT OR REPLACE INTO notes (date, content) VALUES (?, ?)`
  ).bind(date, content).run();
  return Response.json({ ok: true });
}

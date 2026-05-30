// GET /api/family-completions?member=bronson&date=2026-05-30 — completions for a member on a date
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const member = url.searchParams.get('member');
  const date = url.searchParams.get('date');
  if (!member || !date) return Response.json([]);
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT t.id AS task_id, t.label, t.category, t.day_of_week, t.paid, COALESCE(c.done, 0) AS done
     FROM family_tasks t
     LEFT JOIN family_completions c ON c.task_id = t.id AND c.date = ?
     WHERE t.member = ? AND t.active = 1
     ORDER BY t.sort_order`
  ).bind(date, member).all();
  return Response.json(results);
}

// POST /api/family-completions — toggle completion { task_id, date, done }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { task_id, date, done } = await context.request.json();
  await db.prepare(
    `INSERT OR REPLACE INTO family_completions (task_id, date, done) VALUES (?, ?, ?)`
  ).bind(task_id, date, done).run();
  return Response.json({ ok: true });
}

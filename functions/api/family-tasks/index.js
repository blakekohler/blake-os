// GET /api/family-tasks?member=bronson — active tasks for a member
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const member = url.searchParams.get('member');
  if (!member) return Response.json([]);
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT id, member, label, category, day_of_week, paid, sort_order FROM family_tasks WHERE member = ? AND active = 1 ORDER BY sort_order`
  ).bind(member).all();
  return Response.json(results);
}

// POST /api/family-tasks — create task { member, label, category, day_of_week, paid, sort_order }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { member, label, category, day_of_week, paid, sort_order } = await context.request.json();
  const { meta } = await db.prepare(
    `INSERT INTO family_tasks (member, label, category, day_of_week, paid, sort_order) VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(member, label, category || 'daily', day_of_week ?? null, paid || 0, sort_order || 0).run();
  return Response.json({ ok: true, id: meta.last_row_id });
}

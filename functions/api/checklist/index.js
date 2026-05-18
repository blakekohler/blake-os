// GET /api/checklist — all checklist entries (for history view)
export async function onRequestGet(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT date, task_index, done FROM checklist WHERE user = ? ORDER BY date DESC, task_index ASC`
  ).bind(user).all();
  const grouped = {};
  for (const row of results) {
    if (!grouped[row.date]) grouped[row.date] = {};
    grouped[row.date][row.task_index] = !!row.done;
  }
  return Response.json(grouped);
}

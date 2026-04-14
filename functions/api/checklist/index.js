// GET /api/checklist — all checklist entries (for history view)
export async function onRequestGet(context) {
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT date, task_index, done FROM checklist ORDER BY date DESC, task_index ASC`
  ).all();
  // Group by date
  const grouped = {};
  for (const row of results) {
    if (!grouped[row.date]) grouped[row.date] = {};
    grouped[row.date][row.task_index] = !!row.done;
  }
  return Response.json(grouped);
}

// GET /api/pr-history — last 100 PR history entries
export async function onRequestGet(context) {
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT exercise, weight, reps, date FROM pr_history ORDER BY id DESC LIMIT 100`
  ).all();
  return Response.json(results);
}

// GET /api/pr-history — last 100 PR history entries
export async function onRequestGet(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT exercise, weight, reps, date FROM pr_history WHERE user = ? ORDER BY id DESC LIMIT 100`
  ).bind(user).all();
  return Response.json(results);
}

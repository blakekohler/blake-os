// GET /api/swim-sessions/:date — single session
export async function onRequestGet(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const row = await db.prepare(
    `SELECT date, summary, image_keys FROM swim_sessions WHERE user = ? AND date = ?`
  ).bind(user, context.params.date).first();
  return Response.json(row || {});
}

// GET /api/swim-sessions/:date — single session
export async function onRequestGet(context) {
  const db = context.env.DB;
  const row = await db.prepare(
    `SELECT date, summary, image_keys FROM swim_sessions WHERE date = ?`
  ).bind(context.params.date).first();
  return Response.json(row || {});
}

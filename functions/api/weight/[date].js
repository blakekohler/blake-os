// DELETE /api/weight/:date
export async function onRequestDelete(context) {
  const user = context.data.user;
  const date = context.params.date;
  const db = context.env.DB;
  await db.prepare(`DELETE FROM weight_log WHERE user = ? AND date = ?`).bind(user, date).run();
  return Response.json({ ok: true });
}

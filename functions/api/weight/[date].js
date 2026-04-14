// DELETE /api/weight/:date — delete a weight entry
export async function onRequestDelete(context) {
  const date = context.params.date;
  const db = context.env.DB;
  await db.prepare(`DELETE FROM weight_log WHERE date = ?`).bind(date).run();
  return Response.json({ ok: true });
}

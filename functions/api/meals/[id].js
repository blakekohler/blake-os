// DELETE /api/meals/:id — delete meal
export async function onRequestDelete(context) {
  const db = context.env.DB;
  await db.prepare(`DELETE FROM meals WHERE id = ?`).bind(context.params.id).run();
  return Response.json({ ok: true });
}

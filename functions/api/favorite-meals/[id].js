// DELETE /api/favorite-meals/:id — delete favorite
export async function onRequestDelete(context) {
  const db = context.env.DB;
  await db.prepare(`DELETE FROM favorite_meals WHERE id = ?`).bind(context.params.id).run();
  return Response.json({ ok: true });
}

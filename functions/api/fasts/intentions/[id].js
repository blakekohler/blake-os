// DELETE /api/fasts/intentions/:id — delete single intention
export async function onRequestDelete(context) {
  const db = context.env.DB;
  await db.prepare(`DELETE FROM fast_intentions WHERE id = ?`).bind(context.params.id).run();
  return Response.json({ ok: true });
}

// PUT /api/family-tasks/:id — update task (partial fields)
export async function onRequestPut(context) {
  const db = context.env.DB;
  const id = context.params.id;
  const body = await context.request.json();
  const fields = [];
  const values = [];
  for (const key of ['label', 'category', 'day_of_week', 'paid', 'sort_order', 'active']) {
    if (key in body) {
      fields.push(`${key} = ?`);
      values.push(body[key]);
    }
  }
  if (fields.length === 0) return Response.json({ ok: true });
  values.push(id);
  await db.prepare(`UPDATE family_tasks SET ${fields.join(', ')} WHERE id = ?`).bind(...values).run();
  return Response.json({ ok: true });
}

// DELETE /api/family-tasks/:id — soft delete (set active = 0)
export async function onRequestDelete(context) {
  const db = context.env.DB;
  await db.prepare(`UPDATE family_tasks SET active = 0 WHERE id = ?`).bind(context.params.id).run();
  return Response.json({ ok: true });
}

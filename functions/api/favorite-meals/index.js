// GET /api/favorite-meals — all favorites
export async function onRequestGet(context) {
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT id, name, calories, protein, carbs, fat FROM favorite_meals ORDER BY name`
  ).all();
  return Response.json(results);
}

// POST /api/favorite-meals — add favorite { name, calories, protein, carbs, fat }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { name, calories, protein, carbs, fat } = await context.request.json();
  const { meta } = await db.prepare(
    `INSERT INTO favorite_meals (name, calories, protein, carbs, fat) VALUES (?, ?, ?, ?, ?)`
  ).bind(name, calories || 0, protein || 0, carbs || 0, fat || 0).run();
  return Response.json({ ok: true, id: meta.last_row_id });
}

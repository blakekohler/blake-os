// GET /api/meals?date=YYYY-MM-DD — meals for a date
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const date = url.searchParams.get('date');
  if (!date) return Response.json([]);
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT id, date, name, calories, protein, carbs, fat FROM meals WHERE date = ? ORDER BY id`
  ).bind(date).all();
  return Response.json(results);
}

// POST /api/meals — add meal { date, name, calories, protein, carbs, fat }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { date, name, calories, protein, carbs, fat } = await context.request.json();
  const { meta } = await db.prepare(
    `INSERT INTO meals (date, name, calories, protein, carbs, fat) VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(date, name, calories || 0, protein || 0, carbs || 0, fat || 0).run();
  return Response.json({ ok: true, id: meta.last_row_id });
}

// GET /api/fasts — all fasts with intentions
export async function onRequestGet(context) {
  const db = context.env.DB;
  const { results: fasts } = await db.prepare(
    `SELECT date FROM fasts ORDER BY date DESC`
  ).all();
  const { results: intentions } = await db.prepare(
    `SELECT id, date, text FROM fast_intentions ORDER BY id`
  ).all();
  const intentionsByDate = {};
  for (const i of intentions) {
    if (!intentionsByDate[i.date]) intentionsByDate[i.date] = [];
    intentionsByDate[i.date].push({ id: i.id, text: i.text });
  }
  return Response.json(fasts.map(f => ({
    date: f.date,
    intentions: intentionsByDate[f.date] || []
  })));
}

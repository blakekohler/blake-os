// GET /api/tracker — all checked days
export async function onRequestGet(context) {
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT month, day, checked FROM tracker`
  ).all();
  const checked = {};
  for (const row of results) {
    checked[`${row.month}_${row.day}`] = !!row.checked;
  }
  return Response.json(checked);
}

// POST /api/tracker — toggle a day { month, day, checked }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { month, day, checked } = await context.request.json();
  if (checked) {
    await db.prepare(
      `INSERT OR REPLACE INTO tracker (month, day, checked) VALUES (?, ?, 1)`
    ).bind(month, day).run();
  } else {
    await db.prepare(
      `DELETE FROM tracker WHERE month = ? AND day = ?`
    ).bind(month, day).run();
  }
  return Response.json({ ok: true });
}

// GET /api/checklist/:date — get checklist state for a specific date
export async function onRequestGet(context) {
  const date = context.params.date;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT task_index, done FROM checklist WHERE date = ?`
  ).bind(date).all();
  const state = {};
  for (const row of results) {
    state[row.task_index] = !!row.done;
  }
  return Response.json(state);
}

// POST /api/checklist/:date — save checklist state for a specific date
export async function onRequestPost(context) {
  const date = context.params.date;
  const db = context.env.DB;
  const body = await context.request.json();
  // body is { "0": true, "1": false, ... }
  const stmts = [];
  for (const [idx, done] of Object.entries(body)) {
    stmts.push(
      db.prepare(
        `INSERT OR REPLACE INTO checklist (date, task_index, done) VALUES (?, ?, ?)`
      ).bind(date, parseInt(idx), done ? 1 : 0)
    );
  }
  if (stmts.length > 0) await db.batch(stmts);
  return Response.json({ ok: true });
}

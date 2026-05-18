// GET /api/wins/:date
export async function onRequestGet(context) {
  const user = context.data.user;
  const date = context.params.date;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT win_index, done FROM wins WHERE user = ? AND date = ?`
  ).bind(user, date).all();
  const state = {};
  for (const row of results) {
    state[row.win_index] = !!row.done;
  }
  return Response.json(state);
}

// POST /api/wins/:date
export async function onRequestPost(context) {
  const user = context.data.user;
  const date = context.params.date;
  const db = context.env.DB;
  const body = await context.request.json();
  const stmts = [];
  for (const [idx, done] of Object.entries(body)) {
    stmts.push(
      db.prepare(
        `INSERT OR REPLACE INTO wins (user, date, win_index, done) VALUES (?, ?, ?, ?)`
      ).bind(user, date, parseInt(idx), done ? 1 : 0)
    );
  }
  if (stmts.length > 0) await db.batch(stmts);
  return Response.json({ ok: true });
}

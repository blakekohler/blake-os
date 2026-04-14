// GET /api/prs — all current-best PRs
export async function onRequestGet(context) {
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT exercise, weight, reps, date FROM prs`
  ).all();
  const prs = {};
  for (const row of results) {
    prs[row.exercise] = { wt: row.weight, rp: row.reps, date: row.date };
  }
  return Response.json(prs);
}

// POST /api/prs — log a new PR { exercise, weight, reps, date }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { exercise, weight, reps, date } = await context.request.json();

  // Update current best if this is higher
  const existing = await db.prepare(
    `SELECT weight FROM prs WHERE exercise = ?`
  ).bind(exercise).first();

  const stmts = [];

  if (!existing || weight >= existing.weight) {
    stmts.push(
      db.prepare(
        `INSERT OR REPLACE INTO prs (exercise, weight, reps, date) VALUES (?, ?, ?, ?)`
      ).bind(exercise, weight, reps, date)
    );
  }

  // Always append to history
  stmts.push(
    db.prepare(
      `INSERT INTO pr_history (exercise, weight, reps, date) VALUES (?, ?, ?, ?)`
    ).bind(exercise, weight, reps, date)
  );

  await db.batch(stmts);
  return Response.json({ ok: true });
}

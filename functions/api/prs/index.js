// GET /api/prs — all current-best PRs
export async function onRequestGet(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { results } = await db.prepare(
    `SELECT exercise, weight, reps, date FROM prs WHERE user = ?`
  ).bind(user).all();
  const prs = {};
  for (const row of results) {
    prs[row.exercise] = { wt: row.weight, rp: row.reps, date: row.date };
  }
  return Response.json(prs);
}

// POST /api/prs — log a new PR { exercise, weight, reps, date, pr_type }
export async function onRequestPost(context) {
  const user = context.data.user;
  const db = context.env.DB;
  const { exercise, weight, reps, date, pr_type } = await context.request.json();

  const existing = await db.prepare(
    `SELECT weight, reps FROM prs WHERE user = ? AND exercise = ?`
  ).bind(user, exercise).first();

  const stmts = [];

  let isBetter = !existing;
  if (existing) {
    if (pr_type === 'reps') {
      isBetter = (reps || 0) >= (existing.reps || 0);
    } else if (pr_type === 'time') {
      isBetter = (weight || 0) >= (existing.weight || 0);
    } else {
      isBetter = weight > existing.weight ||
        (weight === existing.weight && (reps || 0) > (existing.reps || 0));
    }
  }

  if (isBetter) {
    stmts.push(
      db.prepare(
        `INSERT OR REPLACE INTO prs (user, exercise, weight, reps, date) VALUES (?, ?, ?, ?, ?)`
      ).bind(user, exercise, weight, reps, date)
    );
  }

  stmts.push(
    db.prepare(
      `INSERT INTO pr_history (user, exercise, weight, reps, date) VALUES (?, ?, ?, ?, ?)`
    ).bind(user, exercise, weight, reps, date)
  );

  await db.batch(stmts);
  return Response.json({ ok: true });
}

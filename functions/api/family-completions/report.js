// GET /api/family-completions/report?member=bronson&start=2026-06-01&end=2026-06-07 — completion summary
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const member = url.searchParams.get('member');
  const start = url.searchParams.get('start');
  const end = url.searchParams.get('end');
  if (!member || !start || !end) return Response.json([]);
  const db = context.env.DB;
  const { results } = await db.prepare(
    `WITH dates AS (
       SELECT ? AS date
       UNION ALL SELECT date(date, '+1 day') FROM dates WHERE date < ?
     )
     SELECT d.date,
       COUNT(t.id) AS total_tasks,
       SUM(CASE WHEN c.done = 1 THEN 1 ELSE 0 END) AS completed,
       SUM(CASE WHEN c.done = 1 AND t.paid = 1 THEN 1 ELSE 0 END) AS paid_completed
     FROM dates d
     CROSS JOIN family_tasks t ON t.member = ? AND t.active = 1
       AND (t.day_of_week IS NULL OR t.day_of_week = CAST(strftime('%w', d.date) AS INTEGER))
     LEFT JOIN family_completions c ON c.task_id = t.id AND c.date = d.date
     GROUP BY d.date
     ORDER BY d.date`
  ).bind(start, end, member).all();
  return Response.json(results);
}

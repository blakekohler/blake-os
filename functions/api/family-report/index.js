// POST /api/family-report — generate daily email report { date }
export async function onRequestPost(context) {
  const db = context.env.DB;
  const { date } = await context.request.json();
  if (!date) return Response.json({ ok: false, error: 'date required' }, { status: 400 });

  const members = ['bronson', 'brisbane', 'jamie'];
  const sections = [];

  for (const member of members) {
    const { results } = await db.prepare(
      `SELECT t.label, t.category, t.paid, COALESCE(c.done, 0) AS done
       FROM family_tasks t
       LEFT JOIN family_completions c ON c.task_id = t.id AND c.date = ?
       WHERE t.member = ? AND t.active = 1
         AND (t.day_of_week IS NULL OR t.day_of_week = CAST(strftime('%w', ?) AS INTEGER))
       ORDER BY t.sort_order`
    ).bind(date, member, date).all();

    const total = results.length;
    const completed = results.filter(r => r.done).length;
    const paidCompleted = results.filter(r => r.done && r.paid).length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    const taskRows = results.map(r =>
      `<tr>
        <td style="padding:4px 8px">${r.done ? '&#9745;' : '&#9744;'}</td>
        <td style="padding:4px 8px">${r.label}</td>
        <td style="padding:4px 8px">${r.category}</td>
        <td style="padding:4px 8px">${r.paid ? 'Yes' : ''}</td>
      </tr>`
    ).join('\n');

    sections.push(`
      <h2 style="margin:16px 0 8px">${member.charAt(0).toUpperCase() + member.slice(1)}</h2>
      <p>${completed}/${total} tasks completed (${pct}%) &mdash; ${paidCompleted} paid tasks done</p>
      <table style="border-collapse:collapse;width:100%">
        <tr style="background:#f0f0f0">
          <th style="padding:4px 8px;text-align:left">Done</th>
          <th style="padding:4px 8px;text-align:left">Task</th>
          <th style="padding:4px 8px;text-align:left">Category</th>
          <th style="padding:4px 8px;text-align:left">Paid</th>
        </tr>
        ${taskRows}
      </table>
    `);
  }

  const html = `
    <html><body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:16px">
      <h1>Family Tasks Report &mdash; ${date}</h1>
      ${sections.join('\n<hr>')}
    </body></html>
  `;

  return Response.json({ ok: true, html });
}

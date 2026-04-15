// GET /api/images/:key — serve image from R2
export async function onRequestGet(context) {
  const obj = await context.env.IMAGES.get(context.params.key);
  if (!obj) return new Response('Not found', { status: 404 });
  return new Response(obj.body, {
    headers: {
      'Content-Type': obj.httpMetadata?.contentType || 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000'
    }
  });
}

// DELETE /api/images/:key — remove image from R2
export async function onRequestDelete(context) {
  await context.env.IMAGES.delete(context.params.key);
  return Response.json({ ok: true });
}

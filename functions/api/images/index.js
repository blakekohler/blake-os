// POST /api/images — upload image to R2
export async function onRequestPost(context) {
  const formData = await context.request.formData();
  const file = formData.get('image');
  if (!file) return Response.json({ error: 'No image' }, { status: 400 });
  const key = `swim-${Date.now()}-${crypto.randomUUID()}`;
  await context.env.IMAGES.put(key, file.stream(), {
    httpMetadata: { contentType: file.type }
  });
  return Response.json({ key });
}

// POST /api/images — upload image to R2
export async function onRequestPost(context) {
  const user = context.data.user;
  const formData = await context.request.formData();
  const file = formData.get('image');
  if (!file) return Response.json({ error: 'No image' }, { status: 400 });
  const key = `${user}/swim-${Date.now()}-${crypto.randomUUID()}`;
  await context.env.IMAGES.put(key, file.stream(), {
    httpMetadata: { contentType: file.type }
  });
  return Response.json({ key });
}

const VALID_USERS = ['blake', 'jamie', 'bronson', 'brisbane'];

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const parts = url.pathname.split('/').filter(Boolean);

  // Root — serve user picker
  if (parts.length === 0) {
    return context.env.ASSETS.fetch(new Request(new URL('/picker.html', url.origin)));
  }

  const firstPart = parts[0];

  // API routes — read user from X-User header
  if (firstPart === 'api') {
    const user = context.request.headers.get('X-User') || 'blake';
    if (VALID_USERS.includes(user)) {
      context.data.user = user;
    } else {
      context.data.user = 'blake';
    }
    return context.next();
  }

  // /:user path — serve the app
  if (VALID_USERS.includes(firstPart)) {
    return context.env.ASSETS.fetch(new Request(new URL('/index.html', url.origin)));
  }

  // Everything else (static assets like .js, .css) — pass through
  return context.next();
}

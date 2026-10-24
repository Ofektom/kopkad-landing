/**
 * Blog likes and comments — savings-system /api/v1/blog (service/blog_engagement.py).
 * Public endpoints, no account. Every call resolves (never throws): a network
 * or server failure comes back as { ok: false }, and the blog simply hides
 * the engagement panel.
 */
const API = import.meta.env.VITE_API_BASE_URL || 'https://backend.kopkad.ng';
const VISITOR_KEY = 'kopkad_blog_visitor';

/** A random id for this browser, so it can like a post once. Not tied to any person. */
export const visitorId = () => {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = (crypto.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`);
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
};

const send = async (path, options = {}) => {
  try {
    const res = await fetch(`${API}/api/v1/blog${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    });
    const body = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data: body?.data ?? null, message: body?.message || '' };
  } catch {
    return { ok: false, status: 0, data: null, message: 'Could not reach Kopkad. Check your connection and try again.' };
  }
};

export const getEngagement = (slug) => {
  const id = visitorId();
  return send(`/posts/${encodeURIComponent(slug)}/engagement${id ? `?visitor_id=${encodeURIComponent(id)}` : ''}`);
};

export const toggleLike = (slug) => send(`/posts/${encodeURIComponent(slug)}/like`, {
  method: 'POST', body: JSON.stringify({ visitor_id: visitorId() }),
});

export const postComment = (slug, { name, body, website }) => send(`/posts/${encodeURIComponent(slug)}/comments`, {
  method: 'POST', body: JSON.stringify({ name, body, website: website || null }),
});

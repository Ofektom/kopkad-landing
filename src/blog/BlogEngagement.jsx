import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle, Send } from 'lucide-react';
import { getEngagement, postComment, toggleLike } from './engagementApi';

/**
 * Likes and comments under a blog post. Anyone can like (once per browser)
 * or comment with just a name; comments show only after Kopkad approves them.
 * Renders nothing while the backend switch (BLOG_ENGAGEMENT_ACTIVE) is off or
 * the backend can't be reached.
 */
const NAME_MAX = 60;
const BODY_MAX = 1000;

const when = (iso) => {
  try {
    return new Date(iso).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
};

const BlogEngagement = ({ slug }) => {
  const [state, setState] = useState(null); // null loading | { likes, liked, comments }
  const [form, setForm] = useState({ name: '', body: '', website: '' });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState(null); // { ok, text }

  useEffect(() => {
    let cancelled = false;
    setState(null);
    setNotice(null);
    getEngagement(slug).then((res) => {
      if (!cancelled) setState(res.ok && res.data?.enabled ? res.data : false);
    });
    return () => { cancelled = true; };
  }, [slug]);

  if (!state) return null;

  const like = async () => {
    const wasLiked = state.liked;
    setState((s) => ({ ...s, liked: !wasLiked, likes: s.likes + (wasLiked ? -1 : 1) }));
    const res = await toggleLike(slug);
    if (res.ok) setState((s) => ({ ...s, likes: res.data.likes, liked: res.data.liked }));
    else setState((s) => ({ ...s, liked: wasLiked, likes: s.likes + (wasLiked ? 1 : -1) }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const res = await postComment(slug, form);
    setSending(false);
    setNotice({ ok: res.ok, text: res.message || (res.ok ? 'Thanks! Your comment will appear once it has been approved.' : 'Could not send your comment.') });
    if (res.ok) setForm({ name: form.name, body: '', website: '' });
  };

  const canSend = form.name.trim().length >= 2 && form.body.trim().length >= 2;

  return (
    <section data-testid="blog-engagement" className="mt-8" aria-label="Likes and comments">
      <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-gray-50 border border-gray-100 px-5 py-4">
        <span className="font-semibold text-gray-800 mr-auto">Found this useful?</span>
        <button
          type="button"
          onClick={like}
          aria-pressed={state.liked}
          aria-label={state.liked ? 'Unlike this lesson' : 'Like this lesson'}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${state.liked ? 'border-rose-200 bg-rose-50 text-rose-600' : 'border-gray-200 bg-white text-gray-700 hover:border-rose-200'}`}
        >
          <Heart size={16} className={state.liked ? 'fill-rose-500 text-rose-500' : ''} />
          <span data-testid="like-count">{state.likes}</span>
        </button>
        <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
          <MessageCircle size={16} /> {state.comments.length} {state.comments.length === 1 ? 'comment' : 'comments'}
        </span>
      </div>

      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mt-10">Comments</h2>
      {state.comments.length === 0 ? (
        <p className="text-sm text-gray-500 mt-2">No comments yet. Share how you&apos;re putting this lesson to work.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {state.comments.map((c) => (
            <li key={c.id} className="rounded-2xl bg-white border border-gray-100 p-4">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                <p className="text-xs text-gray-400">{when(c.created_at)}</p>
              </div>
              <p className="text-sm text-gray-700 mt-1.5 whitespace-pre-line break-words">{c.body}</p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={submit} className="mt-6 rounded-2xl bg-white border border-gray-100 p-5" aria-label="Leave a comment">
        <p className="font-semibold text-gray-900">Leave a comment</p>
        <p className="text-xs text-gray-400 mt-0.5">Comments are reviewed before they appear. Please don&apos;t share phone numbers or account details.</p>
        <label className="block mt-4 text-sm font-medium text-gray-700" htmlFor="comment-name">Your name</label>
        <input
          id="comment-name"
          value={form.name}
          maxLength={NAME_MAX}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
        />
        <label className="block mt-3 text-sm font-medium text-gray-700" htmlFor="comment-body">Comment</label>
        <textarea
          id="comment-body"
          rows={4}
          value={form.body}
          maxLength={BODY_MAX}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
          className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
        />
        <p className="text-right text-xs text-gray-400">{form.body.length}/{BODY_MAX}</p>
        {/* Honeypot: hidden from people, filled in by bots. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
          <label htmlFor="comment-website">Website</label>
          <input id="comment-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
        </div>
        {notice && (
          <p role="status" className={`mt-2 text-sm ${notice.ok ? 'text-emerald-700' : 'text-red-600'}`}>{notice.text}</p>
        )}
        <button
          type="submit"
          disabled={!canSend || sending}
          className="mt-3 inline-flex items-center gap-2 rounded-xl bg-cyan-700 hover:bg-cyan-800 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-40"
        >
          <Send size={15} /> {sending ? 'Sending…' : 'Post comment'}
        </button>
      </form>
    </section>
  );
};

export default BlogEngagement;

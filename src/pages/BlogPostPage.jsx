import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CircleCheck, ExternalLink, Lightbulb, Lock, ShieldAlert } from 'lucide-react';
import LandingNavbar from '../landing/LandingNavbar';
import Footer from '../landing/Footer';
import SignupCta from '../blog/SignupCta';
import MoneyMapCta from '../blog/MoneyMapCta';
import BlogEngagement from '../blog/BlogEngagement';
import { DISCLAIMER, getPost, inAppSummary, neighbours, postAction, relatedSlug } from '../blog/posts';
import { goToApp, goToCoop } from '../utils/appNav';
import { furtherReading } from '../content/furtherReading';

/**
 * One money lesson, previewed: each part's key points and takeaway only. The
 * full lesson (examples, quick checks) is in the app — the post says so and
 * ends with a sign-up prompt for the matching Wealth Builder tool.
 */
const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    if (post) document.title = `${post.title} | Kopkad Blog`;
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const { prev, next } = neighbours(post.slug);

  return (
    <>
      <LandingNavbar onCoopClick={() => goToCoop('/')} />
      <main className="pt-16 bg-gray-50 min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-10">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
            <ArrowLeft size={15} /> All money lessons
          </Link>

          <header className="mt-6">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">{post.group} · Lesson {post.order}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">{post.title}</h1>
            <p className="text-lg text-gray-600 mt-3 leading-relaxed">{post.summary}</p>
            <p className="mt-3 text-sm text-gray-400 inline-flex items-center gap-1.5">
              <BookOpen size={14} /> In the app: {inAppSummary(post)}
            </p>
          </header>

          {post.disclaimer && (
            <div className="mt-6 flex gap-2.5 rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3" role="note">
              <ShieldAlert size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-amber-900">{DISCLAIMER}</p>
            </div>
          )}

          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-700 mt-10">Key points</h2>
          {post.lessons.map((lesson, i) => {
            const related = relatedSlug(lesson.action);
            return (
              <section key={lesson.title} className="mt-4 rounded-2xl bg-white border border-gray-100 p-5">
                <h3 className="text-xl font-extrabold text-gray-900">
                  <span className="text-cyan-700">{i + 1}.</span> {lesson.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {lesson.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-gray-700 leading-relaxed">
                      <CircleCheck size={18} className="text-cyan-700 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {lesson.key_idea && (
                  <div className="mt-4 flex gap-3 rounded-xl bg-cyan-50 border border-cyan-100 px-4 py-3">
                    <Lightbulb size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-cyan-900 font-semibold leading-relaxed">{lesson.key_idea}</p>
                  </div>
                )}
                {related && getPost(related) && (
                  <Link to={`/blog/${related}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
                    Related: {getPost(related).title} <ArrowRight size={14} />
                  </Link>
                )}
              </section>
            );
          })}

          <div data-testid="full-lesson-teaser" className="mt-6 rounded-2xl border-2 border-dashed border-cyan-200 bg-white px-5 py-4 flex gap-3 items-start">
            <Lock size={18} className="text-cyan-700 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">The full lesson is in the Kopkad app</p>
              <p className="text-sm text-gray-500 mt-0.5">
                Worked examples in naira, quick checks to test yourself, and the step-by-step guide to doing it, free with your account.
              </p>
              <button type="button" onClick={() => goToApp('/signup')} className="mt-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900 inline-flex items-center gap-1">
                Sign up to read it <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <MoneyMapCta />
          </div>

          {furtherReading(post.slug).length > 0 && (
            <section data-testid="further-reading" className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-700">Read more elsewhere</h2>
              <ul className="mt-3 grid gap-2">
                {furtherReading(post.slug).map(({ title, url, source }) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl bg-white border border-gray-100 hover:border-cyan-200 px-4 py-3"
                    >
                      <span>
                        <span className="block font-semibold text-gray-900 text-sm">{title}</span>
                        <span className="block text-xs text-gray-400">{source}</span>
                      </span>
                      <ExternalLink size={15} className="text-cyan-700 flex-shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-2">External sites, not run by Kopkad.</p>
            </section>
          )}

          <div className="mt-10">
            <SignupCta action={postAction(post)} />
          </div>

          <BlogEngagement slug={post.slug} />

          <nav className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="More lessons">
            {prev ? (
              <Link to={`/blog/${prev.slug}`} className="rounded-2xl bg-white border border-gray-100 p-4 hover:border-cyan-200">
                <span className="text-xs text-gray-400 inline-flex items-center gap-1"><ArrowLeft size={12} /> Previous lesson</span>
                <p className="font-semibold text-gray-900 mt-1">{prev.title}</p>
              </Link>
            ) : <span />}
            {next && (
              <Link to={`/blog/${next.slug}`} className="rounded-2xl bg-white border border-gray-100 p-4 hover:border-cyan-200 sm:text-right">
                <span className="text-xs text-gray-400 inline-flex items-center gap-1">Next lesson <ArrowRight size={12} /></span>
                <p className="font-semibold text-gray-900 mt-1">{next.title}</p>
              </Link>
            )}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;

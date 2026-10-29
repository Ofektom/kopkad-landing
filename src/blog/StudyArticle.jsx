import React, { useState } from 'react';
import { ArrowRight, Check, Clock, Lightbulb, Link2, ShieldAlert } from 'lucide-react';
import Inline from './inline';
import BlogEngagement from './BlogEngagement';
import { DISCLAIMER } from './posts';
import { longDate, studyPosition } from './course';
import { getResource } from '../content/resources';

const SITE = 'https://kopkad.ng';

/** Study text, typeset for reading: comfortable measure, generous line height, clear headings. */
export const Block = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-2xl sm:text-[1.7rem] font-extrabold tracking-tight text-gray-900 mt-12 mb-1 leading-snug"><Inline text={block.text} /></h2>;
    case 'ul':
      return (
        <ul className="mt-5 space-y-2.5 list-disc pl-6 marker:text-cyan-600">
          {block.items.map((item) => <li key={item} className="pl-1"><Inline text={item} /></li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mt-5 space-y-2.5 list-decimal pl-6 marker:font-bold marker:text-cyan-700">
          {block.items.map((item) => <li key={item} className="pl-1"><Inline text={item} /></li>)}
        </ol>
      );
    case 'quote':
      return <blockquote className="mt-7 border-l-4 border-gray-300 pl-5 text-gray-600 italic"><Inline text={block.text} /></blockquote>;
    case 'idea':
      return (
        <aside className="my-9 rounded-r-2xl border-l-4 border-orange-500 bg-orange-50/70 px-6 py-5 flex gap-3">
          <Lightbulb size={22} className="text-orange-500 flex-shrink-0 mt-1" aria-hidden="true" />
          <p className="text-gray-900 font-bold text-xl leading-snug"><Inline text={block.text} /></p>
        </aside>
      );
    default:
      return <p className="mt-5"><Inline text={block.text} /></p>;
  }
};

const words = (blocks) => blocks.reduce((n, b) => n + [b.text || '', ...(b.items || [])].join(' ').split(/\s+/).filter(Boolean).length, 0);
export const readMinutes = (blocks) => Math.max(1, Math.round(words(blocks) / 200));

const WhatsApp = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
  </svg>
);
const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4z" />
  </svg>
);
const XLogo = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7.1 3.9H5.1L17 20z" />
  </svg>
);

/** Share a study to where our readers are: WhatsApp first, then Facebook and X, or copy the link. */
export const ShareBar = ({ slug, title }) => {
  const [copied, setCopied] = useState(false);
  const url = `${SITE}/blog/${slug}`;
  const text = `${title}: today's free Financial Intelligence study`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard blocked: the other buttons still work */ }
  };
  const btn = 'inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 hover:border-cyan-300 hover:text-cyan-800 transition-colors';
  return (
    <div data-testid="share-bar" className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold text-gray-500 mr-1">Share</span>
      <a className={btn} href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`} target="_blank" rel="noopener noreferrer"><WhatsApp /> WhatsApp</a>
      <a className={btn} href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"><Facebook /> Facebook</a>
      <a className={btn} href={`https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"><XLogo /> X</a>
      <button type="button" className={btn} onClick={copy}>{copied ? <><Check size={15} /> Copied</> : <><Link2 size={15} /> Copy link</>}</button>
    </div>
  );
};

/**
 * One study, laid out as a blog post: topic and position, headline, standfirst,
 * byline with date and reading time, the text, the free download if it has one,
 * then share, likes and comments. Used by the blog's front page (today's study)
 * and by each study's own page, so both read the same.
 */
const StudyArticle = ({ study, eyebrow, isToday = false, showDisclaimer = true, children }) => {
  const { topic, n, of } = study.topic ? studyPosition(study) : {};
  const resource = study.resource ? getResource(study.resource) : null;
  const minutes = readMinutes(study.blocks);

  return (
    <article data-testid="study" className="max-w-[44rem] mx-auto">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">
          {eyebrow || <>Topic {study.topic}{topic ? ` · ${topic.title}` : ''}{n ? ` · Study ${n} of ${of}` : ''}</>}
        </p>
        {n > 0 && (
          <div className="mt-3 flex gap-1" aria-hidden="true">
            {Array.from({ length: of }, (_, i) => (
              <span key={i} className={`h-1.5 flex-1 max-w-[2.5rem] rounded-full ${i < n ? 'bg-cyan-600' : 'bg-gray-200'}`} />
            ))}
          </div>
        )}
        <h1 className="mt-4 text-[2.1rem] sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">{study.title}</h1>
        {study.summary && <p className="mt-4 text-xl text-gray-500 leading-relaxed">{study.summary}</p>}
        <div className="mt-6 flex items-center gap-3 border-y border-gray-100 py-4">
          <img src="/favicon.svg" alt="" className="w-10 h-10 rounded-full bg-cyan-50 p-1.5" />
          <div className="text-sm leading-tight">
            <p className="font-bold text-gray-900">Kopkad · Financial Intelligence</p>
            <p className="text-gray-500 mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1">
              {isToday && <span className="rounded bg-orange-100 text-orange-700 font-bold text-[11px] uppercase tracking-wide px-1.5 py-0.5">Today</span>}
              {study.date && <><span className="whitespace-nowrap">{longDate(study.date)}</span><span aria-hidden="true">·</span></>}
              <span className="inline-flex items-center gap-1 whitespace-nowrap"><Clock size={13} /> {minutes} min read</span>
            </p>
          </div>
        </div>
      </header>

      <div className="mt-4 text-[1.1875rem] leading-[1.8] text-gray-800">
        {study.blocks.map((block, i) => <Block key={i} block={block} />)}
      </div>

      {children}

      {resource && (
        <a href={`/resources/${resource.id}`} data-testid="study-resource"
          className="mt-10 flex items-center gap-4 rounded-2xl bg-white border border-orange-200 p-4 shadow-sm hover:border-orange-300 hover:shadow transition">
          <img src={resource.preview} alt="" className="w-16 rounded-md border border-gray-200" loading="lazy" />
          <span className="flex-1">
            <span className="block text-xs font-bold uppercase tracking-widest text-orange-600">Free download</span>
            <span className="block font-bold text-gray-900">{resource.title}</span>
          </span>
          <ArrowRight size={18} className="text-orange-600" />
        </a>
      )}

      {showDisclaimer && (
        <p className="mt-10 flex gap-2 text-sm text-gray-500" role="note">
          <ShieldAlert size={16} className="text-amber-500 flex-shrink-0 mt-0.5" /> {DISCLAIMER}
        </p>
      )}

      <div className="mt-8 pt-6 border-t border-gray-100">
        <ShareBar slug={study.slug} title={study.title} />
      </div>

      <BlogEngagement slug={study.slug} />
    </article>
  );
};

export default StudyArticle;

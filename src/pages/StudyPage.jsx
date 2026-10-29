import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Lightbulb, ListOrdered, ShieldAlert } from 'lucide-react';
import LandingNavbar from '../landing/LandingNavbar';
import Footer from '../landing/Footer';
import SignupCta from '../blog/SignupCta';
import BlogEngagement from '../blog/BlogEngagement';
import Inline from '../blog/inline';
import { ACTIONS, DISCLAIMER } from '../blog/posts';
import { longDate, studyNeighbours, studyPosition } from '../blog/course';
import { getResource } from '../content/resources';
import { goToCoop } from '../utils/appNav';

const Block = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-2xl font-extrabold text-gray-900 mt-10"><Inline text={block.text} /></h2>;
    case 'ul':
      return (
        <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-700 text-lg leading-relaxed">
          {block.items.map((item) => <li key={item}><Inline text={item} /></li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mt-4 space-y-2 list-decimal pl-6 text-gray-700 text-lg leading-relaxed">
          {block.items.map((item) => <li key={item}><Inline text={item} /></li>)}
        </ol>
      );
    case 'quote':
      return <blockquote className="mt-6 border-l-4 border-orange-400 pl-4 text-gray-600 italic text-lg"><Inline text={block.text} /></blockquote>;
    case 'idea':
      return (
        <div className="mt-6 flex gap-3 rounded-2xl bg-cyan-50 border border-cyan-100 px-5 py-4">
          <Lightbulb size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <p className="text-cyan-900 font-semibold text-lg leading-relaxed"><Inline text={block.text} /></p>
        </div>
      );
    default:
      return <p className="mt-4 text-gray-700 text-lg leading-relaxed"><Inline text={block.text} /></p>;
  }
};

/**
 * One day's study in the Financial Intelligence class — the page each day's
 * social post points to. Full text, free, no account. It ends with the
 * Wealth Builder tool that puts the idea into practice, and with what comes
 * next in the class (tomorrow's title, if it isn't out yet).
 */
const StudyPage = ({ study }) => {
  useEffect(() => {
    document.title = `${study.title} | Financial Intelligence`;
    window.scrollTo(0, 0);
  }, [study]);

  const { topic, n, of } = studyPosition(study);
  const { prev, next, upcoming } = studyNeighbours(study.slug);
  const resource = study.resource ? getResource(study.resource) : null;

  return (
    <>
      <LandingNavbar onCoopClick={() => goToCoop('/')} />
      <main className="pt-16 bg-gray-50 min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-10" data-testid="study">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
            <ArrowLeft size={15} /> Financial Intelligence
          </Link>

          <header className="mt-6">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Topic {study.topic}{topic ? ` · ${topic.title}` : ''}{n ? ` · Study ${n} of ${of}` : ''}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">{study.title}</h1>
            {study.summary && <p className="text-lg text-gray-600 mt-3 leading-relaxed">{study.summary}</p>}
            <p className="mt-3 text-sm text-gray-400 inline-flex items-center gap-1.5">
              <CalendarDays size={14} /> {longDate(study.date)}
            </p>
          </header>

          <div className="mt-6">
            {study.blocks.map((block, i) => <Block key={i} block={block} />)}
          </div>

          <div className="mt-8 flex gap-2.5 rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3" role="note">
            <ShieldAlert size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-amber-900">{DISCLAIMER}</p>
          </div>

          {resource && (
            <a href={`/resources/${resource.id}`} data-testid="study-resource"
              className="mt-8 flex items-center gap-4 rounded-2xl bg-white border border-orange-200 p-4 hover:border-orange-300">
              <img src={resource.preview} alt="" className="w-16 rounded-md border border-gray-200" loading="lazy" />
              <span className="flex-1">
                <span className="block text-xs font-bold uppercase tracking-widest text-orange-600">Free download</span>
                <span className="block font-bold text-gray-900">{resource.title}</span>
              </span>
              <ArrowRight size={18} className="text-orange-600" />
            </a>
          )}

          <div className="mt-10">
            <SignupCta action={ACTIONS[study.action] || ACTIONS.money_split} />
          </div>

          <BlogEngagement slug={study.slug} />

          <nav className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="More from the class">
            {prev ? (
              <Link to={`/blog/${prev.slug}`} className="rounded-2xl bg-white border border-gray-100 p-4 hover:border-cyan-200">
                <span className="text-xs text-gray-400 inline-flex items-center gap-1"><ArrowLeft size={12} /> Previous study</span>
                <p className="font-semibold text-gray-900 mt-1">{prev.title}</p>
              </Link>
            ) : <span />}
            {next && (
              <Link to={`/blog/${next.slug}`} className="rounded-2xl bg-white border border-gray-100 p-4 hover:border-cyan-200 sm:text-right">
                <span className="text-xs text-gray-400 inline-flex items-center gap-1">Next study <ArrowRight size={12} /></span>
                <p className="font-semibold text-gray-900 mt-1">{next.title}</p>
              </Link>
            )}
            {upcoming && (
              <div data-testid="next-up" className="rounded-2xl border-2 border-dashed border-cyan-200 bg-white p-4 sm:text-right">
                <span className="text-xs text-gray-400">Next up · {longDate(upcoming.date)}</span>
                <p className="font-semibold text-gray-900 mt-1">{upcoming.title}</p>
              </div>
            )}
          </nav>
          <div className="mt-4 text-center">
            <Link to="/blog/topics" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
              <ListOrdered size={15} /> All 24 topics
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default StudyPage;

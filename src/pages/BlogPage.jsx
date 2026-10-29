import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarClock, FileDown, GraduationCap, ListOrdered } from 'lucide-react';
import LandingNavbar from '../landing/LandingNavbar';
import Footer from '../landing/Footer';
import SignupCta from '../blog/SignupCta';
import StudyArticle from '../blog/StudyArticle';
import { ACTIONS } from '../blog/posts';
import { COURSE, earlierStudies, getTopic, latestStudy, longDate, shortDate } from '../blog/course';
import { goToCoop } from '../utils/appNav';

/**
 * Before day one there is no study yet, so the blog opens on a short welcome
 * post built from the course data (start date, parts, first study): it stays
 * right if the schedule moves. It has its own likes and comments ("welcome").
 */
const welcomePost = () => {
  const parts = [...new Set(COURSE.topics.map((t) => t.part))].map((part) => {
    const ts = COURSE.topics.filter((t) => t.part === part);
    return `**${part}** (topics ${ts[0].no} to ${ts[ts.length - 1].no}): ${ts.map((t) => t.title.split(':')[0]).join(', ')}.`;
  });
  const first = COURSE.next;
  return {
    slug: 'welcome',
    title: 'Welcome to Financial Intelligence',
    summary: `A free money class in plain English, one short study every weekday. It starts on ${longDate(COURSE.starts)}.`,
    blocks: [
      { type: 'p', text: 'Most of us were taught how to earn money. Very few of us were taught how to keep it, grow it and protect it. That skill has a name: **financial intelligence**.' },
      { type: 'p', text: 'This free class teaches it step by step, with naira examples and everyday situations: salaries and daily sales, rent and school fees, family support, ajo, loan apps and scams.' },
      { type: 'h2', text: 'How it works' },
      { type: 'ul', items: [
        'A new study goes up **every weekday at 6 a.m.**, right here on the blog.',
        'Each one takes about five minutes to read and ends with **one small task**.',
        'Topics run over one to three weeks, so each idea has time to sink in.',
        'The same idea is on our Facebook, Instagram and TikTok that day. Comment, ask questions, bring a friend.',
      ] },
      { type: 'h2', text: '24 topics, in four parts' },
      { type: 'ul', items: parts },
      ...(first ? [
        { type: 'h2', text: 'Day one' },
        { type: 'p', text: `On **${longDate(first.date)}** we start with *${first.title}*. Before then, get the free study plan and write one money goal at the top: a number and a date.` },
      ] : []),
      { type: 'idea', text: 'Five minutes a day. Twenty-four topics. One goal.' },
      { type: 'h2', text: 'Your turn' },
      { type: 'p', text: "Tell us in the comments: what's the one money goal you want this class to help you reach?" },
    ],
  };
};

/**
 * The blog's front page opens on today's study, in full, like any blog's latest
 * post: tomorrow it shows tomorrow's (the daily rebuild swaps it at 6 a.m.), and
 * on weekends it stays on Friday's. Below it: what's next, earlier studies, the
 * topic list and the Wealth Builder call to action.
 */
const BlogPage = () => {
  useEffect(() => {
    document.title = 'Financial Intelligence | Kopkad Blog';
    window.scrollTo(0, 0);
  }, []);

  const latest = latestStudy();
  const study = latest || welcomePost();
  const earlier = earlierStudies(6);
  const topic = latest ? getTopic(latest.topic) : COURSE.topics[0];

  return (
    <>
      <LandingNavbar onCoopClick={() => goToCoop('/')} />
      <main className="pt-16 bg-white min-h-screen">
        <div className="border-b border-gray-100 bg-gray-50/80">
          <div className="max-w-[44rem] mx-auto px-5 py-3 flex flex-wrap items-center justify-between gap-2 text-sm">
            <p className="inline-flex items-center gap-2 font-semibold text-gray-700">
              <GraduationCap size={16} className="text-cyan-700" /> Financial Intelligence
              <span className="hidden sm:inline font-normal text-gray-400">· a free study every weekday</span>
            </p>
            <Link to="/blog/topics" className="inline-flex items-center gap-1.5 font-semibold text-cyan-700 hover:text-cyan-900">
              <ListOrdered size={15} /> All 24 topics
            </Link>
          </div>
        </div>

        <div className="px-5 pt-10 pb-6">
          <StudyArticle
            study={study}
            isToday={!!latest && latest.date === COURSE.today}
            eyebrow={latest ? null : `Starts ${longDate(COURSE.starts)}`}
            showDisclaimer={!!latest}
          >
            {!latest && (
            <div data-testid="starts-soon" className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/resources/study-plan" className="px-5 py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-bold inline-flex items-center justify-center gap-2">
                <FileDown size={17} /> Get the free study plan
              </a>
              <Link to="/blog/topics" className="px-5 py-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-semibold inline-flex items-center justify-center gap-2">
                <ListOrdered size={17} /> See all 24 topics
              </Link>
            </div>
            )}
          </StudyArticle>
        </div>

        <section className="bg-gray-50 border-t border-gray-100 px-5 py-12" aria-label="More from the class">
          <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {latest && COURSE.next && (
                <div data-testid="home-next-up" className="rounded-2xl border-2 border-dashed border-cyan-200 bg-white p-5 flex items-start gap-3">
                  <CalendarClock size={20} className="text-cyan-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Next up · {longDate(COURSE.next.date)}</p>
                    <p className="font-bold text-gray-900 mt-1">{COURSE.next.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">Out at 6 a.m. Come back then, or follow us so you don&apos;t miss it.</p>
                  </div>
                </div>
              )}
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">Earlier in the class</h2>
                {earlier.length ? (
                  <ul className="mt-4 grid gap-3">
                    {earlier.map((s) => (
                      <li key={s.slug}>
                        <Link to={`/blog/${s.slug}`} className="group flex items-center justify-between gap-3 rounded-2xl bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-sm px-4 py-3.5 transition">
                          <span>
                            <span className="block text-xs text-gray-400">{shortDate(s.date)} · Topic {s.topic}</span>
                            <span className="block font-semibold text-gray-900 group-hover:text-cyan-800">{s.title}</span>
                          </span>
                          <ArrowRight size={16} className="text-cyan-700 flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-gray-500">{latest ? 'Today is day one. Earlier studies will collect here.' : 'The first study goes up on day one. Earlier studies will collect here.'}</p>
                )}
              </div>
            </div>
            <aside className="rounded-2xl bg-white border border-gray-100 p-5 h-fit">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{latest ? 'Now studying' : 'First topic'}</p>
              <p className="font-extrabold text-gray-900 text-lg mt-1">Topic {topic?.no}: {topic?.title}</p>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{topic?.summary}</p>
              <Link to="/blog/topics" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
                <ListOrdered size={15} /> See all 24 topics
              </Link>
            </aside>
            <div className="lg:col-span-3">
              <SignupCta action={ACTIONS[latest?.action] || ACTIONS.money_split} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;

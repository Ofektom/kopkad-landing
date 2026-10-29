import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays, FileDown, GraduationCap, ListOrdered } from 'lucide-react';
import LandingNavbar from '../landing/LandingNavbar';
import Footer from '../landing/Footer';
import SignupCta from '../blog/SignupCta';
import { ACTIONS, inAppSummary, posts } from '../blog/posts';
import { COURSE, earlierStudies, getTopic, latestStudy, longDate, shortDate, studyPosition } from '../blog/course';
import { goToCoop } from '../utils/appNav';

/** Before day one: when the class starts, what the first topic is, and the study plan. */
const StartsSoon = () => {
  const first = COURSE.topics[0];
  return (
    <div data-testid="starts-soon" className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Starts {longDate(COURSE.starts)}</p>
      <h2 className="text-3xl font-extrabold text-gray-900 mt-2 leading-tight">Day one: {COURSE.next?.title}</h2>
      <p className="text-gray-600 mt-3 leading-relaxed">
        The class opens with Topic 1, {first.title.toLowerCase()}: {first.summary.charAt(0).toLowerCase()}{first.summary.slice(1)} A new study
        every weekday morning, free, right here.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <a href="/resources/study-plan" className="px-5 py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-bold inline-flex items-center justify-center gap-2">
          <FileDown size={17} /> Get the free study plan
        </a>
        <Link to="/blog/topics" className="px-5 py-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-semibold inline-flex items-center justify-center gap-2">
          <ListOrdered size={17} /> See all 24 topics
        </Link>
      </div>
    </div>
  );
};

/** Today's study, front and centre. */
const Today = ({ study }) => {
  const { topic, n, of } = studyPosition(study);
  return (
    <Link to={`/blog/${study.slug}`} data-testid="todays-study"
      className="group block rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-orange-600 inline-flex items-center gap-1.5">
        <CalendarDays size={14} /> {study.date === COURSE.today ? 'Today' : longDate(study.date)} · Topic {study.topic}{n ? `, study ${n} of ${of}` : ''}
      </p>
      <h2 className="text-3xl font-extrabold text-gray-900 mt-2 leading-tight group-hover:text-cyan-800">{study.title}</h2>
      {study.summary && <p className="text-gray-600 mt-3 text-lg leading-relaxed">{study.summary}</p>}
      <p className="text-sm text-gray-400 mt-3">{topic?.title}</p>
      <span className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-700 group-hover:bg-cyan-800 text-white font-bold">
        Read today&apos;s study <ArrowRight size={16} />
      </span>
    </Link>
  );
};

/**
 * The blog's front page: the Financial Intelligence class, one study a day.
 * Opens on the latest study (what each day's social post points to), then the
 * last few, then the way into the full topic list. The older money-lesson
 * articles stay below as a library.
 */
const BlogPage = () => {
  useEffect(() => {
    document.title = 'Financial Intelligence | Kopkad Blog';
    window.scrollTo(0, 0);
  }, []);

  const latest = latestStudy();
  const earlier = earlierStudies(4);
  const topic = latest ? getTopic(latest.topic) : null;

  return (
    <>
      <LandingNavbar onCoopClick={() => goToCoop('/')} />
      <main className="pt-16 bg-gray-50 min-h-screen">
        <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 px-4 pt-14 pb-24">
          <div className="max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-500/30">
              <GraduationCap size={14} /> Free money class · a new study every weekday
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-5 leading-tight">
              Financial Intelligence. <span className="text-orange-400">One study a day.</span>
            </h1>
            <p className="text-cyan-100 text-lg mt-4 max-w-2xl leading-relaxed">
              24 topics, from knowing where your money goes to building wealth that lasts. Read today&apos;s study,
              then put it to work in Wealth Builder.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 -mt-16 pb-12 space-y-12">
          {latest ? <Today study={latest} /> : <StartsSoon />}

          {latest && (
            <div className="grid gap-6 lg:grid-cols-3">
              <section className="lg:col-span-2" aria-labelledby="earlier">
                <h2 id="earlier" className="text-xl font-extrabold text-gray-900">Earlier in the class</h2>
                {earlier.length ? (
                  <ul className="mt-4 grid gap-3">
                    {earlier.map((s) => (
                      <li key={s.slug}>
                        <Link to={`/blog/${s.slug}`} className="flex items-center justify-between gap-3 rounded-2xl bg-white border border-gray-100 hover:border-cyan-200 px-4 py-3">
                          <span>
                            <span className="block text-xs text-gray-400">{shortDate(s.date)} · Topic {s.topic}</span>
                            <span className="block font-semibold text-gray-900">{s.title}</span>
                          </span>
                          <ArrowRight size={16} className="text-cyan-700 flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : <p className="mt-3 text-gray-500">Today is day one. Earlier studies will collect here.</p>}
              </section>
              <aside className="rounded-2xl bg-white border border-gray-100 p-5 h-fit">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Now studying</p>
                <p className="font-extrabold text-gray-900 text-lg mt-1">Topic {topic?.no}: {topic?.title}</p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{topic?.summary}</p>
                {COURSE.next && (
                  <p data-testid="home-next-up" className="text-sm text-gray-500 mt-4 border-t border-gray-100 pt-3">
                    <span className="block text-xs text-gray-400">Next up · {longDate(COURSE.next.date)}</span>
                    <span className="font-semibold text-gray-800">{COURSE.next.title}</span>
                  </p>
                )}
                <Link to="/blog/topics" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
                  <ListOrdered size={15} /> All 24 topics
                </Link>
              </aside>
            </div>
          )}

          <SignupCta action={ACTIONS.money_split} />

          <section aria-labelledby="library">
            <h2 id="library" className="text-2xl font-extrabold text-gray-900">Money lesson library</h2>
            <p className="text-gray-500 mt-1 mb-6">Short lessons on the big money habits, from the Kopkad app and the classic money books.</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all p-5 flex flex-col"
                >
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-cyan-800">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed flex-1">{post.summary}</p>
                  <span className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1"><BookOpen size={13} /> {inAppSummary(post)}</span>
                    <span className="inline-flex items-center gap-1 text-cyan-700 font-semibold">Read <ArrowRight size={13} /></span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;

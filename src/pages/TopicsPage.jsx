import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import LandingNavbar from '../landing/LandingNavbar';
import Footer from '../landing/Footer';
import { COURSE, longDate, shortDate } from '../blog/course';
import { goToCoop } from '../utils/appNav';

const PARTS = [...new Set(COURSE.topics.map((t) => t.part))];

/**
 * All 24 topics of the class. Topics already under way list the studies
 * released so far (links); later topics show only their title and start
 * date, so readers can see where the class is going without reading ahead.
 */
const TopicsPage = () => {
  useEffect(() => {
    document.title = 'All topics | Financial Intelligence';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LandingNavbar onCoopClick={() => goToCoop('/')} />
      <main className="pt-16 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
            <ArrowLeft size={15} /> Today&apos;s study
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-6">All 24 topics</h1>
          <p className="text-gray-600 mt-2 text-lg leading-relaxed">
            The Financial Intelligence class, in order. Each topic runs over several days, with a new study every weekday.
          </p>

          {PARTS.map((part, pi) => (
            <section key={part} className="mt-10" aria-labelledby={`part-${pi}`}>
              <h2 id={`part-${pi}`} className="text-xs font-bold uppercase tracking-widest text-orange-600">Part {pi + 1} · {part}</h2>
              <ol className="mt-3 grid gap-3">
                {COURSE.topics.filter((t) => t.part === part).map((t) => {
                  const live = t.released.length > 0;
                  return (
                    <li key={t.no} id={t.slug} data-testid={`topic-${t.no}`}
                      className={`rounded-2xl border p-5 ${live ? 'bg-white border-cyan-100' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-baseline gap-3">
                        <span className={`text-2xl font-extrabold ${live ? 'text-cyan-700' : 'text-gray-300'}`}>{t.no}</span>
                        <div className="flex-1">
                          <h3 className={`text-lg font-extrabold ${live ? 'text-gray-900' : 'text-gray-500'}`}>{t.title}</h3>
                          <p className={`text-sm mt-1 leading-relaxed ${live ? 'text-gray-600' : 'text-gray-400'}`}>{t.summary}</p>
                          {!live && t.starts && (
                            <p className="text-xs text-gray-400 mt-2 inline-flex items-center gap-1"><Clock size={12} /> Starts {longDate(t.starts)}</p>
                          )}
                        </div>
                      </div>
                      {live && (
                        <ul className="mt-4 grid gap-2 pl-9">
                          {t.released.map((s) => (
                            <li key={s.slug}>
                              <Link to={`/blog/${s.slug}`} className="flex items-center justify-between gap-3 text-sm rounded-xl px-3 py-2 hover:bg-cyan-50">
                                <span><span className="text-gray-400 mr-2">{shortDate(s.date)}</span><span className="font-semibold text-gray-900">{s.title}</span></span>
                                <ArrowRight size={14} className="text-cyan-700 flex-shrink-0" />
                              </Link>
                            </li>
                          ))}
                          {t.released.length < t.study_count && (
                            <li className="text-xs text-gray-400 px-3">{t.study_count - t.released.length} more {t.study_count - t.released.length === 1 ? 'study' : 'studies'} to come in this topic</li>
                          )}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TopicsPage;

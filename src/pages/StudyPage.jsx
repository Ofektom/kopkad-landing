import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ListOrdered } from 'lucide-react';
import LandingNavbar from '../landing/LandingNavbar';
import Footer from '../landing/Footer';
import SignupCta from '../blog/SignupCta';
import StudyArticle from '../blog/StudyArticle';
import { ACTIONS } from '../blog/posts';
import { COURSE, longDate, studyNeighbours } from '../blog/course';
import { goToCoop } from '../utils/appNav';

/**
 * One day's study on its own address (/blog/<slug>), the link each day's
 * social post and every share point to. Same layout as the blog's front page,
 * then the previous and next study and the Wealth Builder call to action.
 */
const StudyPage = ({ study }) => {
  useEffect(() => {
    document.title = `${study.title} | Financial Intelligence`;
    window.scrollTo(0, 0);
  }, [study]);

  const { prev, next, upcoming } = studyNeighbours(study.slug);

  return (
    <>
      <LandingNavbar onCoopClick={() => goToCoop('/')} />
      <main className="pt-16 bg-white min-h-screen">
        <div className="max-w-[44rem] mx-auto px-5 pt-8">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
            <ArrowLeft size={15} /> Financial Intelligence
          </Link>
        </div>
        <div className="px-5 pt-6 pb-10">
          <StudyArticle study={study} isToday={study.date === COURSE.today} />
        </div>

        <section className="bg-gray-50 border-t border-gray-100 px-5 py-12" aria-label="More from the class">
          <div className="max-w-[44rem] mx-auto">
            <nav className="grid gap-4 sm:grid-cols-2" aria-label="Previous and next study">
              {prev ? (
                <Link to={`/blog/${prev.slug}`} className="rounded-2xl bg-white border border-gray-100 p-4 hover:border-cyan-200 hover:shadow-sm transition">
                  <span className="text-xs text-gray-400 inline-flex items-center gap-1"><ArrowLeft size={12} /> Previous study</span>
                  <p className="font-semibold text-gray-900 mt-1">{prev.title}</p>
                </Link>
              ) : <span className="hidden sm:block" />}
              {next && (
                <Link to={`/blog/${next.slug}`} className="rounded-2xl bg-white border border-gray-100 p-4 hover:border-cyan-200 hover:shadow-sm transition sm:text-right">
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
            <div className="mt-5 text-center">
              <Link to="/blog/topics" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
                <ListOrdered size={15} /> All 24 topics
              </Link>
            </div>
            <div className="mt-10">
              <SignupCta action={ACTIONS[study.action] || ACTIONS.money_split} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StudyPage;

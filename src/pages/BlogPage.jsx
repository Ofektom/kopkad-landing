import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import LandingNavbar from '../landing/LandingNavbar';
import Footer from '../landing/Footer';
import SignupCta from '../blog/SignupCta';
import MoneyMapCta from '../blog/MoneyMapCta';
import { ACTIONS, inAppSummary, posts } from '../blog/posts';
import { goToCoop } from '../utils/appNav';

const GROUPS = [
  ['Core course', 'The money habits behind Wealth Builder: split every income, save first, cut what you don’t need, and grow.'],
  ['From the classics', 'Lessons from well-known money books and Nigerian sources, retold for everyday life here.'],
];

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Money Lessons | Kopkad Blog';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LandingNavbar onCoopClick={() => goToCoop('/')} />
      <main className="pt-16 bg-gray-50 min-h-screen">
        <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-500/30">
              <BookOpen size={14} /> Kopkad Blog · Money Lessons
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-5 leading-tight">
              Learn the money habits. <span className="text-orange-400">Then put them to work.</span>
            </h1>
            <p className="text-cyan-100 text-lg mt-4 max-w-2xl leading-relaxed">
              The key ideas from Kopkad&apos;s money lessons on saving, budgeting, debt and growing wealth.
              Sign up free for the full lessons, and for the Wealth Builder tools that help you do each one.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">
          <MoneyMapCta title="New here? Start with your free Money Map" />

          {GROUPS.map(([group, intro]) => (
            <section key={group} aria-labelledby={`group-${group}`}>
              <h2 id={`group-${group}`} className="text-2xl font-extrabold text-gray-900">{group}</h2>
              <p className="text-gray-500 mt-1 mb-6">{intro}</p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {posts.filter((p) => p.group === group).map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all p-5 flex flex-col"
                  >
                    <span className="text-xs font-semibold text-cyan-700">Lesson {post.order}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 leading-snug group-hover:text-cyan-800">{post.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed flex-1">{post.summary}</p>
                    <span className="mt-4 flex items-center justify-between text-xs text-gray-400">
                      <span className="inline-flex items-center gap-1"><BookOpen size={13} /> {inAppSummary(post)}</span>
                      <span className="inline-flex items-center gap-1 text-cyan-700 font-semibold">Read <ArrowRight size={13} /></span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <SignupCta action={ACTIONS.money_split} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;

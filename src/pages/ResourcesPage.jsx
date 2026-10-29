import React, { useEffect } from 'react';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, FileSpreadsheet, FileText } from 'lucide-react';
import LandingNavbar from '../landing/LandingNavbar';
import Footer from '../landing/Footer';
import SignupCta from '../blog/SignupCta';
import { ACTIONS } from '../blog/posts';
import { getResource, releasedResources } from '../content/resources';
import { goToCoop } from '../utils/appNav';

const ICONS = { pdf: FileText, xlsx: FileSpreadsheet };

const Downloads = ({ resource }) => (
  <div className="flex flex-wrap gap-3 mt-5">
    {resource.files.map((f, i) => {
      const Icon = ICONS[f.kind] || FileText;
      return (
        <a key={f.href} href={f.href} download
          className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white ${i === 0 ? 'bg-cyan-700 hover:bg-cyan-800' : 'bg-gray-900 hover:bg-black'}`}>
          <Icon size={17} /> {f.label}
        </a>
      );
    })}
  </div>
);

const Shell = ({ children }) => (
  <>
    <LandingNavbar onCoopClick={() => goToCoop('/')} />
    <main className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">{children}</div>
    </main>
    <Footer />
  </>
);

/**
 * One free download (kopkad.ng/resources/<id>) — where the comment-to-DM
 * automations send people. It shows only this resource, then today's study
 * and Wealth Builder, not a menu of every other download.
 */
export const ResourcePage = () => {
  const { id } = useParams();
  const resource = getResource(id);

  useEffect(() => {
    if (resource) document.title = `${resource.title} | Free download | Kopkad`;
    window.scrollTo(0, 0);
  }, [resource]);

  if (!resource) return <Navigate to="/resources" replace />;

  return (
    <Shell>
      <article data-testid={`resource-${resource.id}`}>
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Free download · no account needed</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">{resource.title}</h1>
        <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
          <img src={resource.preview} alt={`Preview of ${resource.title}`} className="w-48 rounded-xl border border-gray-200 shadow-lg" />
          <div className="flex-1">
            <p className="text-gray-600 text-lg leading-relaxed">{resource.description}</p>
            <Downloads resource={resource} />
          </div>
        </div>
        <Link to="/blog" className="mt-10 flex items-center justify-between gap-3 rounded-2xl bg-white border border-gray-100 hover:border-cyan-200 px-5 py-4">
          <span>
            <span className="block text-xs font-bold uppercase tracking-widest text-cyan-700">Financial Intelligence · free class</span>
            <span className="block font-semibold text-gray-900 mt-0.5">Read today&apos;s study</span>
          </span>
          <ArrowRight size={18} className="text-cyan-700" />
        </Link>
        <div className="mt-8">
          <SignupCta action={ACTIONS[resource.action] || ACTIONS.money_split} />
        </div>
      </article>
    </Shell>
  );
};

/** kopkad.ng/resources — every download released so far. Old /resources#<id> links go to that resource's page. */
const ResourcesPage = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = hash ? getResource(hash.slice(1)) : null;
    if (target) { navigate(`/resources/${target.id}`, { replace: true }); return; }
    document.title = 'Free resources | Kopkad';
    window.scrollTo(0, 0);
  }, [hash, navigate]);

  return (
    <Shell>
      <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Free downloads</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Resources</h1>
      <p className="text-gray-600 mt-2 text-lg leading-relaxed">
        Worksheets and plans from the Financial Intelligence class. Free to download, no account needed.
      </p>
      <div className="mt-8 grid gap-4">
        {releasedResources().map((r) => (
          <Link key={r.id} to={`/resources/${r.id}`} data-testid={`resource-card-${r.id}`}
            className="flex gap-5 items-center rounded-2xl bg-white border border-gray-100 hover:border-cyan-200 p-5">
            <img src={r.preview} alt="" className="w-24 rounded-lg border border-gray-200" loading="lazy" />
            <span className="flex-1 min-w-0">
              <span className="block text-xs font-bold uppercase tracking-widest text-orange-600">{r.tag}</span>
              <span className="block text-lg font-extrabold text-gray-900 mt-0.5">{r.title}</span>
              <span className="block text-sm text-gray-500 mt-1 leading-relaxed">{r.description}</span>
            </span>
            <ArrowRight size={18} className="text-cyan-700 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </Shell>
  );
};

export default ResourcesPage;

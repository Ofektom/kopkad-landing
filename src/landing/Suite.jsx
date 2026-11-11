import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { SUITE_PRODUCTS, SUITE_CONTACT, NAME_NEW_PRODUCT } from '../content/suite';

/**
 * "The Kopkad suite": what is live and what is coming. Live products open their
 * site; the coming-soon one opens an email (no sign-up form: there is no
 * waiting-list backend yet and we do not want to collect data we cannot use).
 */
const Suite = ({ onAppClick, onCoopClick }) => {
  const handlers = {
    app: onAppClick,
    coop: onCoopClick,
    mail: () => {
      window.location.href = `mailto:${SUITE_CONTACT}?subject=${encodeURIComponent(`${NAME_NEW_PRODUCT} pilot`)}`;
    },
  };

  return (
    <section id="suite" className="py-20 px-4 bg-white scroll-mt-16" aria-labelledby="suite-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            The Kopkad suite
          </span>
          <h2 id="suite-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Software for how Africans actually save, lend and trade
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Two products are live today. A third, for pharmacies and shops, is on its way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUITE_PRODUCTS.map((p) => {
            const soon = p.status === 'soon';
            const Icon = p.action === 'mail' ? Mail : ArrowRight;
            return (
              <article
                key={p.id}
                data-testid={`suite-${p.id}`}
                className={`rounded-2xl p-6 flex flex-col border ${soon ? 'border-dashed border-cyan-300 bg-cyan-50' : 'border-gray-200 bg-white shadow-sm'}`}
              >
                <span
                  className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${soon ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}
                >
                  {soon ? 'Coming soon' : 'Live'}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                <p className="text-sm font-medium text-cyan-700 mt-1">{p.audience}</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-3 flex-1">{p.blurb}</p>
                <button
                  onClick={handlers[p.action]}
                  className={`mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors ${soon ? 'bg-white text-cyan-800 border border-cyan-300 hover:bg-cyan-100' : 'bg-cyan-700 text-white hover:bg-cyan-800'}`}
                >
                  {p.cta} <Icon size={16} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Suite;

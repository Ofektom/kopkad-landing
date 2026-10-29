import React from 'react';
import { ArrowRight, FileDown } from 'lucide-react';
import { MONEY_MAP_URL } from '../utils/appNav';

/**
 * Free lead magnet for blog readers who aren't ready to sign up: the Money Map
 * worksheet (PDF + spreadsheet) at kopkad.ng/resources/money-map. A plain link, so it
 * is in the prerendered HTML and crawlers can follow it.
 */
const MoneyMapCta = ({ title = 'Put this lesson on paper: your Money Map', compact = false }) => (
  <div data-testid="money-map-cta" className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
    <div className="flex-1 min-w-0">
      <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Free download · no account needed</p>
      <h2 className="text-2xl font-extrabold text-gray-900 mt-1 leading-tight">{title}</h2>
      <p className="text-gray-600 mt-2 leading-relaxed">
        One page that shows where you stand today: income, spending, what you own, what you owe and your net worth.
        Printable PDF or a spreadsheet that does the maths. About 20 minutes.
      </p>
      <a
        href={MONEY_MAP_URL}
        data-testid="money-map-link"
        className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-bold"
      >
        <FileDown size={18} /> Get the free Money Map <ArrowRight size={16} />
      </a>
    </div>
    {!compact && (
      <a href={MONEY_MAP_URL} aria-label="Get the free Money Map" className="w-48 sm:w-52 flex-shrink-0">
        <img
          src="/magnets/money-map-preview.webp"
          alt="Preview of the Money Map worksheet"
          loading="lazy"
          className="w-full rounded-xl border border-gray-200 shadow-lg rotate-2"
        />
      </a>
    )}
  </div>
);

export default MoneyMapCta;
